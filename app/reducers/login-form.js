
import * as types from '../constants/action-types';

const defaultState = {
  showLogin: true
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOGIN_FORM:
      return Object.assign({}, state, {showLogin: !state.showLogin});
    default:
      return state;
  }
};
