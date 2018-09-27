export function saveTabIndex (state = {},action){
  if(action.type === 'saveTabIndex'){
    return {
      ...state,
      ...action.payload
    }
  }else {
    return state
  }
}
