import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import navBar from './nav-bar';
import topBar from './top-bar';
import loginForm from './login-form';
import empty from './empty';

let reducers = { navBar, topBar, loginForm, form, firebase: empty };

export default combineReducers(Object.assign(
  {}, reducers, {routing: routerReducer}));
