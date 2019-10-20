import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-ionicons'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import { LoginNavigator, MainScreen, TariffScreen, CreditScreen, SettingsScreen, AuthLoadingScreen, ForgotScreen, ServicesNavigator } from './screens'
import store from './stores'

const AuthStack = createSwitchNavigator({
  SignIn: {
    screen: LoginNavigator,
    navigationOptions: { header: null } },
  Forgot: {
    screen: ForgotScreen,
    navigationOptions: { header: null } },
  AuthLoading: {
    screen: AuthLoadingScreen,
    navigationOptions: { header: null } }

}, {
  initialRouteName: 'AuthLoading'

})


const MainStack = createStackNavigator({
  Пользователь: {
    screen: MainScreen,
    navigationOptions: { header: null } },
    Расходы: {
      screen: CreditScreen,
      navigationOptions: { header: null } },
  Услуги: {
    screen: ServicesNavigator,
    navigationOptions: { header: null } },
  Тарифы: {
  screen: TariffScreen,
    navigationOptions: { header: null } },
},
{
  initialRouteName: 'Пользователь'

})


const AppStack = createMaterialBottomTabNavigator({
  'Мой МОТИВ': {
    screen: MainStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) =>
        (<Icon name="person" size={25} color={tintColor} />)
    }
  },
  Настройки: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) =>
        (<Icon name="more" size={25} color={tintColor} />)
    }
  }
},
{
  activeColor: '#FF7C03',
  inactiveColor: '#D8',
  barStyle: { backgroundColor: '#fff'
  }
})

const Final = createAppContainer(
  createSwitchNavigator({
    Auth: {
      screen: AuthStack
    },
    AuthLoading: AuthLoadingScreen,
    App: AppStack
  },
  {
    initialRouteName: 'Auth'
  }
  )
)


export default class App extends Component {
  render() {
    console.disableYellowBox = true

    return (
      <Provider store={store}>
        <Final />
      </Provider>
    )
  }
}
