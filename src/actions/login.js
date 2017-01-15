import * as types from '../constants/action-types';

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
