import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native'
import axios from 'axios'

import AsyncStorage from '@react-native-community/async-storage';

class AuthLoadingScreen extends Component {
  componentDidMount() {
    const url = 'http://borolis.site:8000/api/users/current'

    AsyncStorage.getItem('apitoken')
      .then(apitoken => {
        axios.get(url,{
          headers: {
            Authorization: `Token ${apitoken}`
          }
        }).then(
          res => this.props.navigation.navigate('App')
        )
          .catch( () => {
            this.props.navigation.navigate('SignIn')
            }
          )

      })
      .catch(err => {

        AsyncStorage.removeItem('apitoken')
          .then(() => this.props.navigation.navigate('SignIn'))
          .catch(() => this.props.navigation.navigate('SignIn'))

      })
  }

  render() {
    const { container } = styles
    return (
      <View style={container}>
        <ActivityIndicator size="large" color="rgb(233,110,45)" />
      </View>
    )
  }
}

export default AuthLoadingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center'
  }
})
