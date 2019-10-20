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
import AsyncStorage from '@react-native-community/async-storage';
class LoginNavigator extends Component {
  state= {
    username: '9533863035',
    password: '8kM3w49K'
  }

  onClickLogin = async () => {
    // this.props.navigation.navigate('App')

    const url = 'http://borolis.site:8000/api/users/login'
    axios.post(url, {
      user: {
      username: this.state.username,
      password: this.state.password
      }
    })
      .then(response => {
        // console.log(response);
         AsyncStorage.setItem('apitoken', response.data.user.token).then(
           () =>  this.props.navigation.navigate('App')
         )
      })
      .catch(error => {
        console.log(error)
        alert('Неправильный логин или пароль')
      })
  }


  render() {
    const { container, button, item, img } = styles
    return (
      <Container>
        <Content>
          <Form style={container}>
            <Image style={img} source={require('../img/logo_motiv.png')} />
            <Item>
              <Input
                onChangeText={(username) => this.setState({ username })}
                placeholder="Логин"
              />
            </Item>
            <Item style={item}>
              <Input
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry
                placeholder="Пароль"
              />
            </Item>

            <Button onPress={this.onClickLogin} full rounded style={[item, button]}>
              <Text>Войти</Text>
            </Button>

            <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', justifyContent: 'center', paddingTop: 30,paddingHorizontal:30 }}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('Forgot')}>
                <Text>Забыли пароль?</Text>
              </TouchableOpacity>

            </View>
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
    backgroundColor: 'rgb(233,110,45)'
  },
  img: {
    flex: 1,
    alignSelf: 'center'
  }
})
