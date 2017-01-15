
import * as types from '../constants/action-types';

const defaultState = {
  showLogin: true,
  userLoggedIn: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOGIN_FORM:
      return Object.assign({}, state, {showLogin: !state.showLogin});
    case types.USER_INFO_LOADED:
      return Object.assign({}, state, {userLoggedIn: true});
    default:
      return state;
  }
};
