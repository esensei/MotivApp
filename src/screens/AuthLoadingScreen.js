import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage';

class AuthLoadingScreen extends Component {
  componentDidMount() {
    const { warn } = console
    AsyncStorage.getItem('apitoken')
      .then(res => {
        //TODO VALIDATION

      })
      .catch(err => warn(err))
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
