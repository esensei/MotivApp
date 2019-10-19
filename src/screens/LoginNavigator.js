import React, { Component } from 'react'
import {
  Image,

  StyleSheet
} from 'react-native'
import {
  Button,
  Container,
  Form,
  Content,
  Text,
  Input,
  Item
} from 'native-base'

class LoginNavigator extends Component {
  render() {
    const { container, button, item, img } = styles
    return (
      <Container>
        <Content >
          <Form style={container}>
            <Image style={img} source={require('../img/logo_motiv.png')} />
            <Item>
              <Input placeholder="Логин" />
            </Item>
            <Item style={item}>
              <Input secureTextEntry placeholder="Пароль" />
            </Item>
            <Button onPress={() => this.props.navigation.navigate('App')} full rounded style={[item, button]}>
              <Text>Войти</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default LoginNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center'
  },
  item: {
    flex: 1,

    marginTop: 30
  },
  button: {
    backgroundColor: 'rgb(233,110,45)',
  },
  img:{
    flex:1,
    alignSelf: 'center'
  }
})
