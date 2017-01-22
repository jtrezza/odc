import * as types from '../constants/action-types';
import {createCompany} from '../api/companies';

export function createOrEditCompany(company) {
  return function createOrEditCompanyThunk(dispatch, getState) {

    const {id} = company;
    if(!id) {
      return createCompany(getState().firebase, company);
    }
  };
}
