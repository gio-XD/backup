import {combineReducers} from 'redux';
import {saveAsset,saveForm,saveAllocationData} from './data.js'
import {saveLoginStatus} from './login.js'
import {saveTabIndex} from './global.js'
import { routerReducer } from 'react-router-redux'




const reducer = combineReducers({
  router:routerReducer,
  assetList:saveAsset,
  formData:saveForm,
  allocationData:saveAllocationData,
  loginStatus:saveLoginStatus,
  global:saveTabIndex
});


export default reducer;
