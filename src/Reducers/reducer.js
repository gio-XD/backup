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

const reducer = combineReducers({
  assetList:saveAsset,
  formData:saveForm
});


export default reducer;
