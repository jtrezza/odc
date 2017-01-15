import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import firebaseConfig from './firebase-config';
import { userInfoLoaded } from '../actions/login';

firebase.initializeApp(firebaseConfig);

const logger = createLogger();
const store = createStore(reducer, {firebase}, applyMiddleware(thunk, logger));
const history = syncHistoryWithStore(browserHistory, store);

firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    if(window.location.pathname === '/') {
      history.push('/app');
    }
    store.dispatch(userInfoLoaded());
  } else {
    if(window.location.pathname !== '/') {
      history.push('/');
    }
  }
});

export { store, history };
