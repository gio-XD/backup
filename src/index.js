import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './Reducers/reducer.js';
import  {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';


const state = {
  allocation:[],
  selectedTab:'menu'
}

const store = createStore(reducer,state,applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
