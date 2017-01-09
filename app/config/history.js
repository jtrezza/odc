import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import firebaseConfig from './firebase-config';

firebase.initializeApp(firebaseConfig);

const logger = createLogger();

const store = createStore(reducer, {firebase},
  applyMiddleware(thunk, logger));

export { store };

export const history = syncHistoryWithStore(browserHistory, store);
