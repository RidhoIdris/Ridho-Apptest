import {ContactState} from './contact.interface';
import {Dispatches} from '../../constant';

const initialState: ContactState = {
  contact_list: [],
  contact_detail: {},
  loading_contact: false,
  nomor: 0,
};

type Actions = {type: string; payload: any};

const contactReducers = (
  state = initialState,
  action: Actions,
): ContactState => {
  const {type, payload} = action;
  switch (type) {
    case Dispatches.SET_CONTACT_LIST:
      return {
        ...state,
        contact_list: payload,
      };
    case Dispatches.SET_CONTACT_DETAIL:
      return {
        ...state,
        contact_detail: payload,
      };
    case Dispatches.SET_LOADING_CONTACT:
      return {
        ...state,
        loading_contact: payload,
      };
    case Dispatches.SET_NOMOR:
      return {
        ...state,
        nomor: payload,
      };
    default:
      return state;
  }
};

export default contactReducers;
