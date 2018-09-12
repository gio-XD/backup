export function wxConfig(state = [],action){
  if(action.type === 'query'){
    return  action.payload;
  }else{
    return state;
  }
}
