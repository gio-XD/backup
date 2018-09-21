export function saveAsset(state = {data:[],pageIndex:1,hasMore:true},action){
  switch (action.type) {
    case 'saveAssetList':
        switch (action.payload.action) {
          case 'fetch':
              return  {
                ...state,
                data:state.data.concat(action.payload.data),
                hasMore:action.payload.data.length !== 0,
                pageIndex:action.payload.data.length === 0 ? state.pageIndex : state.pageIndex + 1
              }

          case 'query':
              return  {
                ...state,
                data:state.data.concat(action.payload.data),
                hasMore:action.payload.data.length !== 0,
                pageIndex:action.payload.data.length === 0 ? state.pageIndex : state.pageIndex + 1
              }

          default:
              return  {
                ...state,
              }
        }

      case 'initialAssetList':
      console.log('initial state of AssetList');
          return{
            data:[],pageIndex:1,isfinished:false
          }

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
    return   state.concat(action.payload) ;
  }else{
    return state;
  }
}

export function saveSelectedtab(state = 'menu',action){
  if(action.type === 'saveSelectedtab'){
    // console.log(action.payload);
    return  action.payload ;
  }else{
    return state;
  }
}
