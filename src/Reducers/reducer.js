import {combineReducers} from 'redux';
import {saveAsset,saveForm,saveAllocationData,saveSelectedtab} from './data.js'
import {saveLoginStatus} from './login.js'
import { routerReducer } from 'react-router-redux'




const reducer = combineReducers({
  router:routerReducer,
  assetList:saveAsset,
  formData:saveForm,
  allocationData:saveAllocationData,
  selectedTab:saveSelectedtab,
  loginStatus:saveLoginStatus
});


export default reducer;
