const initalState = {
  name: 'Аменд Евгений Владимирович',
  phoneNumber: '89827084465',
  balance: 1000,
  minutes: 0,
  internet: 0,
  sms: 0,
  tariff: 'Посекудный'
}

const servicesReducer = (state = [], action) => {
  if (action.type === 'INFO_FETCH') {
    const { name,
      phoneNumber,
      balance,
      sms,
      minutes,
      internet,
      tariff } = action.payload

    return {
      name,
      phoneNumber,
      balance,
      tariff,
      sms,
      minutes,
      internet

    }
  }
  return state
}

export default servicesReducer
