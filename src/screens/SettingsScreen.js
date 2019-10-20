import React, { Component } from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
} from 'native-base';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{height:94, backgroundColor: '#F9F9F9'}}>
          <Left>

          </Left>
          <Body >

            <Title style={{color: '#FF7C03'}}>Настройки</Title>

          </Body>
          <Right>
          </Right>
        </Header>
        <Content style={{paddingHorizontal: 16, paddingVertical: 24}}>
          <Button onPress={() => {
            AsyncStorage.removeItem('apitoken').then(() => this.props.navigation.navigate('Auth'))

          }} rounded style={{backgroundColor:"#FF7C03"}}>
            <Text>Выход</Text>
          </Button>
        </Content>

      </Container>
    );
  }
}

export default SettingsScreen;
