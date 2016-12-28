import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {createStore, applyMiddleware} from 'redux';

const logger = createLogger();

const store = createStore(reducer, undefined,
  applyMiddleware(thunk, logger));

export { store };

export const history = syncHistoryWithStore(browserHistory, store);
