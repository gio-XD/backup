import {combineReducers} from 'redux';
import {saveAsset,saveForm,saveAllocationData,saveSelectedtab} from './data.js'
import {saveLoginStatus} from './login.js'




const reducer = combineReducers({
  assetList:saveAsset,
  formData:saveForm,
  allocationData:saveAllocationData,
  selectedTab:saveSelectedtab,
  loginStatus:saveLoginStatus
});


export default reducer;
