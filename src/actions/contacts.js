import * as types from '../constants/action-types';
import {createContact} from '../api/contacts';

export function createOrEditContact(contact, companyId) {
  return function createOrEditContactThunk(dispatch, getState) {

    const {id} = contact;

    if(!id) {
      createContact(getState().firebase, contact, companyId)
        .then(payload => {
          console.info('Contact created ', payload);
          // dispatch(receiveEntities(payload.entities));
          // dispatch({
          //   type: actionTypes.ADD_CATEGORY,
          //   payload: payload.result
          // });
          // dispatch(closeCategoriesModal());
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  };
}
