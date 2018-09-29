export function saveTabIndex (state = {},{type,payload}){
  if(type === 'saveTabIndex'){
    return {
      ...state,
      ...payload
    }
  }else {
    return state
  }
}
