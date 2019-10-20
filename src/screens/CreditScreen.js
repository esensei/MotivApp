import React, { Component } from 'react'
import { Container, Header, Badge, Text, List, ListItem, Content, Left, Body, Right, Button, Icon, Title } from 'native-base'
import {
  View,
  Switch,
  Dimensions,
  ActivityIndicator,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import Pie from 'react-native-pie'

const servicesData = []
class CreditScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ height: 94, backgroundColor: '#F9F9F9' }}>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon style={{ color: '#FF7C03' }} name="arrow-back" />
            </Button>
          </Left>
          <Body>

            <Title style={{ color: '#FF7C03' }}>Расходы</Title>

          </Body>
          <Right />
        </Header>
        <Content style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
          <View style={styles.container}>


            <View>

              <Pie
                radius={100}
                innerRadius={60}
                series={[10, 90]}
                colors={['#34C759', '#FF2D55']}
              />

            </View>

            <Text style={{ marginTop: 24 }}>С 19.09.2019 по 19.10.2019</Text>

          </View>
          <List style={{ marginTop: 46 }}>
            <ListItem style={{flex:1,justifyContent: 'space-between'}}>
              <Badge style={{ backgroundColor: '#34C759' }} >
                <Text>  </Text>
              </Badge>

              <Text style={{}}>Абонентская плата</Text>
              <Text style={{ fontSize: 17, color: 'rgba(0, 0, 0, 0.54)'}}>5,25 ₽</Text>
            </ListItem>
            <ListItem style={{flex:1,justifyContent: 'space-between'}}>
              <Badge style={{ backgroundColor: '#FF2D55' }} >
                <Text>  </Text>
              </Badge>
              <Text>Сообщения MMS</Text>
              <Text style={{fontSize: 17, color: 'rgba(0, 0, 0, 0.54)'}}>5,25 ₽</Text>
            </ListItem>

          </List>
        </Content>

      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24
  }
})
export default CreditScreen
