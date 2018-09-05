import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './Reducers/reducer.js';
import  {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';


const state = {
  assetList:[],
  allocation:[],
  selectedTab:'menu'
}
const store = createStore(reducer,state,applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
