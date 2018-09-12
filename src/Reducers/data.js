export function saveAsset(state = [],action){
  if(action.type === 'query'){
    return  action.payload;
  }else{
    return state;
  }
}

export function saveForm(state = {},action){
  if(action.type === 'saveForm'){
    return  {...state,...action.payload};
  }else{
    return state;
  }
}

export function saveAllocationData(state = [],action){
  if(action.type === 'saveAllocationData'){
    // console.log(action.payload);
    return  action.payload;
  }else{
    return state;
  }
}

export function saveSelectedtab(state = 'menu',action){
  if(action.type === 'saveSelectedtab'){
    // console.log(action.payload);
    return  action.payload;
  }else{
    return state;
  }
}
