export function saveAsset(state = {data:[],pageIndex:1,isfinished:false},action){
  switch (action.type) {
    case 'saveAssetList':
        switch (action.payload.action) {
          case 'fetch':
              return  {
                ...state,
                data:state.data.concat(action.payload.data),
                isfinished:action.payload.data.length === 0,
                pageIndex:action.payload.data.length === 0 ? state.pageIndex : state.pageIndex + 1
              }
            break;
          case 'query':
              return  {
                ...state,
                // data:state.data.concat(action.payload.data),
                // isfinished:action.payload.data.length === 0,
                // pageIndex:action.payload.data.length === 0 ? state.pageIndex : state.pageIndex + 1
              }
            break;
          default:
              return  {
                ...state,
              }
        }
      break;
    default:
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
