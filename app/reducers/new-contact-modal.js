
import * as types from '../constants/action-types';

const defaultState = {
  isOpen: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SHOW_NEW_CONTACT_MODAL:
      return Object.assign({}, state, {isOpen: true});
    case types.HIDE_NEW_CONTACT_MODAL:
      return Object.assign({}, state, {isOpen: false});
    default:
      return state;
  }
};
