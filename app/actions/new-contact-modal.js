import * as types from '../constants/action-types';

export function showNewContactModal() {
  return {
    type: types.SHOW_NEW_CONTACT_MODAL
  };
}

export function hideNewContactModal() {
  return {
    type: types.HIDE_NEW_CONTACT_MODAL
  };
}
