const initialState = {
    inActiveServices:[],
    activeServices:[]
}
const servicesReducer = (state = initialState , action) => {
  if (action.type === 'FETCH_ACTIVE_SERVICES') {
    return {
    ...state,
      activeServices: action.payload
    }
  }

  if (action.type === 'FETCH_INACTIVE_SERVICES') {
    return {
      ...state,
      inActiveServices: action.payload
    }
  }

  return state


}


export default servicesReducer
