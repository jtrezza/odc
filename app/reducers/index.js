import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navBar from './nav-bar';

let reducers = { navBar };

export default combineReducers(Object.assign(
  {}, reducers, {routing: routerReducer}));
