import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/routes.jsx';
import {Provider} from 'react-redux';
import { store, history } from './config/history';

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history}/>
  </Provider>,
  document.getElementById('js-app'));
