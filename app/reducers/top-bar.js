
import * as types from '../constants/action-types';

const defaultState = {
  showNewMenu: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.TOGGLE_NEW_MENU:
      return Object.assign({}, state, {showNewMenu: !state.showNewMenu});
    default:
      return state;
  }
};
