import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navBar from './nav-bar';
import topBar from './top-bar';

let reducers = { navBar, topBar };

export default combineReducers(Object.assign(
  {}, reducers, {routing: routerReducer}));
