import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import firebaseConfig from './firebase-config';
import { setCurrentUser, unmountUserInfo } from '../actions/login';

firebase.initializeApp(firebaseConfig);

const logger = createLogger();
const store = createStore(reducer, {firebase}, applyMiddleware(thunk, logger));
const history = syncHistoryWithStore(browserHistory, store);

firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    if(!store.getState().login.userInfoLoaded) {
      store.dispatch(setCurrentUser(user));
    }
    if(window.location.pathname === '/') {
      history.push('/app');
    }
  } else {
    store.dispatch(unmountUserInfo());
    if(window.location.pathname !== '/') {
      history.push('/');
    }
  }
});

export { store, history };
