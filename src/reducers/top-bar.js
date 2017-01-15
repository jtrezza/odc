
import * as types from '../constants/action-types';

const defaultState = {
  showNewMenu: false,
  showUserMenu: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.TOGGLE_NEW_MENU:
      return Object.assign({}, defaultState, {showNewMenu: !state.showNewMenu});
    case types.TOGGLE_USER_MENU:
      return Object.assign({}, defaultState, {showUserMenu: !state.showUserMenu});
    case types.HIDE_ALL_MENUS:
      return defaultState;
    default:
      return state;
  }
};
