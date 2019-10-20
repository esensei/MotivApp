import React, { Component } from 'react';
import { Container, Header, Text, Content, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {
  View,
  Switch,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { fetchInActiveServices, fetchActiveServices } from '../actions'
const { width, height } = Dimensions.get('window')

const Fragment = props => (
  <View style={{flex:1,flexDirection: 'row', justifyContent:'space-between', marginVertical: 24}}>
    <View>
      <Text style={{width: width / 1.5, fontSize: 17,
      lineHeight: 22}}>{props.data.title}</Text>
      <Text  style={{width: width / 1.5, fontSize: 12,
        color: 'rgba(0, 0, 0, 0.54)',
        lineHeight: 16}}>{props.data.subtitle}</Text>
    </View>
    <Switch value={props.status}  trackColor={{true: "#FF7C03"}} style={{alignSelf: "flex-end"}}/>
  </View>
)


class ServicesNavigator extends Component {
  componentDidMount() {
    this.props.fetchActiveServices()
    this.props.fetchInActiveServices()
  }

  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
  }

  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };
  render() {
    const {activeServices, inActiveServices} = this.props
  if (!(activeServices.length > 0 && inActiveServices.length > 0) ) {
    return ( <View style={styles.container}>
      <ActivityIndicator size="large" color="rgb(233,110,45)" />
    </View>)
  }
    return (
      <>
        <Container>
          <Header style={{height:94, backgroundColor: '#F9F9F9'}}>
            <Left>
              <Button onPress={() => this.props.navigation.goBack()} transparent>
                <Icon style={{color: "#FF7C03"}} name='arrow-back' />
              </Button>
            </Left>
            <Body >

              <Title style={{color: '#FF7C03'}}>Услуги</Title>

            </Body>
            <Right>

            </Right>
          </Header>
          <Content style={{paddingLeft: 12}} padder>
            <Text style={{fontSize: 20,lineHeight: 24,}}>Платные</Text>
            {activeServices.map((val, index) =>    <Fragment status data={val}/>)}

            <Text style={{fontSize: 20, lineHeight: 24, }}>Бесплатные</Text>
            {inActiveServices.map((val, index) =>   <Fragment data={val}/>)}


          </Content>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  activeServices: state.services.activeServices,
  inActiveServices: state.services.inActiveServices
})

const mapDispatchToProps = dispatch => ({
  fetchActiveServices: payload => dispatch(fetchActiveServices(payload)),
  fetchInActiveServices: payload => dispatch(fetchInActiveServices(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ServicesNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center'
  }
})
