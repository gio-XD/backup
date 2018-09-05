import {combineReducers} from 'redux';


function saveAsset(state = [],action){
  if(action.type === 'query'){
    return  action.payload;
  }else{
    return state;
  }
}

function saveForm(state = {},action){
  if(action.type === 'saveForm'){
    return  {...state,...action.payload};
  }else{
    return state;
  }
}

function saveAllocationData(state = [],action){
  if(action.type === 'saveAllocationData'){
    // console.log(action.payload);
    return  action.payload;
  }else{
    return state;
  }
}

function saveSelectedtab(state = 'menu',action){
  if(action.type === 'saveSelectedtab'){
    // console.log(action.payload);
    return  action.payload;
  }else{
    return state;
  }
}

const reducer = combineReducers({
  assetList:saveAsset,
  formData:saveForm,
  allocationData:saveAllocationData,
  selectedTab:saveSelectedtab
});


export default reducer;
