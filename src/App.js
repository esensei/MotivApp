import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-ionicons'
import React from 'react'
import { LoginNavigator, MainScreen, AuthLoadingScreen } from './screens'

const AuthStack = createStackNavigator({ SignIn: { screen: LoginNavigator, navigationOptions: { header: null } } })
const AppStack = createMaterialBottomTabNavigator({
  Основной: {
    screen: MainScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) =>
        (<Icon name="podium" size={25} color={tintColor} />)
    }
  },
  Настройки: {
    screen: MainScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) =>
        (<Icon name="list" size={25} color={tintColor} />)
    }
  }
},
{
  activeColor: 'white',
  inactiveColor: 'rgb(200,200, 187)',
  barStyle: { backgroundColor: 'rgb(233,110,45)'
  }
})

export default createAppContainer(
  createSwitchNavigator({
    Auth: {
      screen: AuthStack
    },
    AuthLoading: AuthLoadingScreen,
    App: AppStack
  },
  {
    // initialRouteName: 'AuthLoading'
  }
  )
)
