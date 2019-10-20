import React, { Component } from 'react'
import { Container, Content, Card, CardItem, Text } from 'native-base'
import {
  SafeAreaView,
  Switch,
  StatusBar,
  Dimensions,
  Image,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {fetchInfoUser} from '../actions'
import { Rashodi, Uslugi, Tariff } from '../img'
import { InfoRings } from '../components'
import Icon from "react-native-ionicons";
import {connect} from 'react-redux'
const { width, height } = Dimensions.get('window')

class MainScreen extends Component {

  componentDidMount() {
    this.props.fetchInfoUser()
  }

  render() {
    const { name, phoneNumber, balance, minutes, internet, sms} = this.props.info

    if (!(this.props.info > 0 ) ) {
      return (<View style={styles.container}>
        <ActivityIndicator size="large" color="rgb(233,110,45)" />
      </View>)
    }
    return (
      <Container style={{ paddingHorizontal: 18 }}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 0 }} />
        <Content>
          <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 12}}>
            <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.54)'}}>{name}</Text>
            <Text style={{fontSize: 15, color: 'rgba(0, 0, 0, 0.87)'}}>{phoneNumber}</Text>

          </View>
          <View style={{
            padding: 20,
            marginTop: 48,
            borderRadius: 16 }}
          >
            <Text style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.54)' }}>Баланс на сегодня {new Date().getHours() + 1}:{new Date().getMinutes()}</Text>
            <View style={{flex:1,flexDirection: 'row', }}>
            <Text style={{ fontSize: 48, color: 'black' }}>{balance} ₽</Text>
            <Icon style={{marginLeft: 12,alignSelf: 'center'}}name="add-circle" size={24} color="#FF7C03" />
            </View>

          </View>
          <View>
            <InfoRings gb={internet} sms={sms} minutes={minutes}/>

          </View>

          <Card  style={{ marginTop: 20 }}>
            <CardItem button onPress={() => this.props.navigation.navigate('Услуги')} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flex: 5 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Услуги</Text>
                <Text style={{ fontSize: 12, marginTop: 4, color: 'rgba(0,0,0,0.54)' }}>Для интернета, роуминга и другие услуги</Text>
              </View>
              <View style={{ marginVertical: 16 }}>
                <Uslugi height={48} width={48} />
              </View>
            </CardItem>
          </Card>

          <Card style={{ marginTop: 20 }}>
            <CardItem button onPress={() => this.props.navigation.navigate('Тарифы')} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flex: 5 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Тариф</Text>
                <Text style={{ fontSize: 12, marginTop: 4, color: 'rgba(0,0,0,0.54)' }}>Интернет, звонки или все сразу</Text>
              </View>
              <View style={{ marginVertical: 16 }}>
                <Tariff height={48} width={48} />
              </View>
            </CardItem>
          </Card>

          <Card style={{ marginTop: 20 }}>
            <CardItem button onPress={() => this.props.navigation.navigate('Расходы')} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flex: 5 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Расходы</Text>
                <Text style={{ fontSize: 12, marginTop: 4, color: 'rgba(0,0,0,0.54)' }}>Следите за своими расходами</Text>
              </View>
              <View style={{ marginVertical: 16 }}>
                <Rashodi height={48} width={48} />
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  info: state.info
})

const mapDispatchToProps = dispatch => ({
  fetchInfoUser: payload => dispatch(fetchInfoUser(payload))
})



  const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center'
  }
})
  export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
