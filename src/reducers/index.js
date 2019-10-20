import { combineReducers } from 'redux'
import servicesReducer from './servicesReducer'
import infoReducer from './infoReducer'

export default rootReducer = combineReducers({
  services: servicesReducer,
  info: infoReducer

})
