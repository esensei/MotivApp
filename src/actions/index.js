import { AsyncStorage } from 'react-native'
import axios from 'axios'

export function fetchMenuSuccess(payload) {
  return {
    type: 'MENU_FETCH',
    payload
  }
}

export function fetchTimeSlotsSuccess(payload) {
  return {
    type: 'SLOTS_FETCH',
    payload
  }
}

export function fetchActiveHistorySuccess(payload) {
  return {
    type: 'ACTIVE_HISTORY_FETCH',
    payload
  }
}

 function fetchInfoUserSuccess(payload) {
  return {
    type: 'INFO_FETCH',
    payload
  }
}

function fetchActiveServicesSuccess(payload) {
  return {
    type: 'FETCH_ACTIVE_SERVICES',
    payload
  }
}


function fetchInActiveServicesSuccess(payload) {
  return {
    type: 'FETCH_INACTIVE_SERVICES',
    payload
  }
}

export function fetchInActiveServices() {
  return (dispatch) => {
    AsyncStorage.getItem('apitoken').then(token => {
      axios
        .get('http://borolis.site:8000/api/services?active=false', {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          dispatch(fetchInActiveServicesSuccess(res.data))
        })
        .catch(() => alert('Произошла ошибка получения данных, попробуйте позже'))
    })
  }
}
export function fetchActiveServices() {
  return (dispatch) => {
    AsyncStorage.getItem('apitoken').then(token => {
      axios
        .get('http://borolis.site:8000/api/services?active=true', {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          dispatch(fetchActiveServicesSuccess(res.data))
        })
        .catch(() => alert('Произошла ошибка получения данных, попробуйте позже'))
    })
  }
}


export function fetchInfoUser() {
  return (dispatch) => {
    AsyncStorage.getItem('apitoken').then(token => {
      axios
        .get('http://borolis.site:8000/api/info', {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          dispatch(fetchInfoUserSuccess(res.data))
        })
        .catch(() => alert('Произошла ошибка получения данных, попробуйте позже'))
    })
  }
}

export function fetchDisableOrdersHistory() {
  return (dispatch) => {
    AsyncStorage.getItem('apitoken').then(token => {
      axios
        .get(`${Config.API_URL}/public/orders/?status=2&status=3&status=4`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          dispatch(fetchDisableHistorySuccess(res.data))
        })
        .catch(() => alert('Произошла ошибка получения заказов, попробуйте позже'))
    })
  }
}

export function getTimeSlots() {
  return (dispatch) => {
    axios.get(`${Config.API_URL}/public/timeslots`)
      .then((response) => {
        dispatch(fetchTimeSlotsSuccess(response.data))
      })
      .catch(error => console.log(error))
  }
}
