import * as types from '../constants/action-types';
import users from '../api/users';

export function createUser(user) {
  return function createUserThunk(dispatch, getState) {

    return users.createUser(getState().firebase, user);
  };
}
