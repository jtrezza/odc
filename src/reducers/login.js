
import * as types from '../constants/action-types';

const defaultState = {
  showLogin: true,
  userInfoLoaded: false,
  currentUser: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOGIN_FORM:
      return Object.assign({}, state, {showLogin: !state.showLogin});
    case types.SET_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.payload});
    case types.USER_INFO_LOADED:
      return Object.assign({}, state, {userInfoLoaded: true});
    case types.UNMOUNT_USER_INFO:
      return Object.assign({}, state, {currentUser: {}, userInfoLoaded: false});
    default:
      return state;
  }
};
