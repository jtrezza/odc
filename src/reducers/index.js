import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import navBar from './nav-bar';
import topBar from './top-bar';
import login from './login';
import empty from './empty';
import newContactModal from './new-contact-modal';

let reducers = { navBar, topBar, login, form, firebase: empty,
  newContactModal };

export default combineReducers(Object.assign(
  {}, reducers, {routing: routerReducer}));
