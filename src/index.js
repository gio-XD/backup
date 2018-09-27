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
  selectedTab:'menu',
  global:{
    index:{
      tabIndex:'menu'
    },
    mine:{
      tabIndex:0,
      direction:'right'
    },
    audit:{
      tabIndex:0,
      direction:'right'
    }
  }
}

const store = createStore(reducer,state,applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
