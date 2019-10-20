import React, { Component } from 'react'
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native'
import axios from 'axios'
import {
  Button,
  Container,
  Form,
  Content,
  Text,
  Input,
  Item
} from 'native-base'

class ForgotScreen extends Component {
  state={
  number: 0
  }

  forgotPassword = async () => {
    if (this.state.number === 0) {
      alert('Введите номер телефона')
      return
    }



    const url = 'https://api.motivtelecom.ru/client/v1/password'
    axios.post(url, {
      username: this.state.number
    })
      .then(response => {
        this.props.navigation.navigate('SignIn')
        // AsyncStorage.setItem('apitoken', response.data).then(
        //   () =>  this.props.navigation.navigate('App')
        // )
      })
      .catch(error => {
        console.log(error.response)
        alert('Неверный номер телефона')
      })
  }


  render() {
    const { container, button, item, img } = styles
    return (
      <Container>
        <Content>
          <Form style={container}>
            <Text style={{fontSize: 30, fontWeight: 'bold', flex: 1}}> Забыли пароль?</Text>
            <Item style={item}>
              <Input
                onChangeText={(number) => this.setState({ number })}
                placeholder="Введите номер телефона"
              />
            </Item>
            <Button onPress={() => this.forgotPassword()} full rounded style={[item, button]}>
              <Text>Восстановить </Text>
            </Button>

          </Form>
        </Content>
      </Container>
    )
  }
}

export default ForgotScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    alignContent: 'center',
    justifyContent: 'center'
  },
  item: {
    flex: 1,

    marginTop: 30
  },
  button: {
    backgroundColor: 'rgb(233,110,45)'
  },
  img: {
    flex: 1,
    alignSelf: 'center'
  }
})
