import * as types from '../constants/action-types';

export function toggleNewMenu() {
  return {
    type: types.TOGGLE_NEW_MENU
  };
}
export function toggleUserMenu() {
  return {
    type: types.TOGGLE_USER_MENU
  };
}
export function hideAllMenus() {
  return {
    type: types.HIDE_ALL_MENUS
  };
}
