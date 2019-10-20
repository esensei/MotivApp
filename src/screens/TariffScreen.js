import React, { Component } from 'react';
import { Container, Header, Text, Content, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {
  View,
  Switch,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
const { width, height } = Dimensions.get('window')

import { connect } from 'react-redux'
const data = [
  {
    title: 'Интернет',
    value: '9 ₽/мин'
  },
  {
    title: 'Минуты',
    value: '1 ₽/мин'
  },
  {
    title: 'СМС',
    value: '1.8 ₽/шт'
  }
]
const servicesData = [
  {
    title:'Исходящие звонки на номера МОТИВ',
    value:'1 ₽/мин'
  },
  {
    title:'Исходящие звонки на номера региона подключения других операторов',
    value:'2 ₽/мин'
  },
  {
    title:'Исходящие звонки на номера региона подключения ГТС',
    value:'3 ₽/мин'
  },
  {
    title:'Исходящие MMS-сообщения на номера РФ',
    value:'6 ₽/100Кб'
  },
  {
    title:'Исходящие SMS-сообщения на номера международных операторов',
    value:'5,5 ₽/шт'
  },
]
class TariffScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{height:94, backgroundColor: '#F9F9F9'}}>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon style={{color: "#FF7C03"}} name='arrow-back' />
            </Button>
          </Left>
          <Body >

            <Title style={{color: '#FF7C03'}}>Тариф</Title>

          </Body>
          <Right>
          </Right>
        </Header>
        <Content style={{paddingHorizontal: 16, paddingVertical: 24}}>
          <View style={{flex:1, justifyContent: 'space-between', flexDirection: 'row'}}>
          <View>
          <Text style={{fontSize:20, lineHeight: 24, fontWeight: 'bold'}}>Посекундный</Text>
          <Text style={{fontSize:17, lineHeight: 22, color: 'rgba(0, 0, 0, 0.54)'}}>В архиве</Text>
          </View>
          <View>
            <Text style={{fontSize:20, lineHeight: 24, color: '#FF7C03'}}>0 ₽/месяц</Text>

          </View>
          </View>
          {data.map((obj) => (
            <View style={{flex:1, flexDirection: 'row', paddingHorizontal: 18, justifyContent:'space-between'}}>
              <Text style={{paddingTop:24}}>{obj.title}</Text>
              <Text style={{paddingTop:24}}>{obj.value}</Text>
            </View>
          ))}

          <Text style={{fontSize:17, lineHeight: 22, marginTop: 40,fontWeight: 'bold'}}>Услуги, доступные на тарифе</Text>

          {servicesData.map((obj) => (
            <View style={{flex:1, flexDirection: 'row', paddingHorizontal: 18, justifyContent:'space-between'}}>
              <Text style={{marginTop: 10, width: width / 1.5}}>{obj.title}</Text>
              <Text >{obj.value}</Text>
            </View>
          ))}
        </Content>

      </Container>
    )
  }
}

export default TariffScreen
