export function saveLoginStatus(state = {status:'fail'},action) {
  if(action.type === 'saveLoginStatus'){
    return action.payload
  }else {
    return state;
  }
}
