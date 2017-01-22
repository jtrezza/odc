import * as types from '../constants/action-types';
import { getUser } from '../api/users';

export function toggleLoginForm() {
  return {
    type: types.TOGGLE_LOGIN_FORM
  };
}
export function userInfoLoaded() {
  return {
    type: types.USER_INFO_LOADED
  };
}
export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    payload: user
  };
}
export function loadUserInfo(userId) {
  return function loadUserInfoThunk(dispatch, getState) {
    getUser(getState().firebase, userId)
    .then(user => {
      dispatch(setCurrentUser(user));
      dispatch(userInfoLoaded());
    });

  };
}
export function unmountUserInfo() {
  return {
    type: types.UNMOUNT_USER_INFO
  };
}
