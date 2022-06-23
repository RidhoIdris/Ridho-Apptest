import {Alert} from 'react-native';
import {Dispatches} from '../../constant';
import {
  serviceAddContact,
  serviceDeleteContact,
  serviceEditContact,
  serviceGetContactDetail,
  serviceGetContactList,
} from '../../services/serviceContact';

export default {
  getContactList: (cb?: (val: boolean) => void) => async (dispatch: any) => {
    dispatch({
      type: Dispatches.SET_LOADING_CONTACT,
      payload: true,
    });
    try {
      const response = await serviceGetContactList();
      dispatch({
        type: Dispatches.SET_CONTACT_LIST,
        payload: response.data.data,
      });
      cb && cb(true);
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: Dispatches.SET_LOADING_CONTACT,
      payload: false,
    });
  },
  getContactDetail:
    (id: string, cb: (val: boolean) => void) => async (dispatch: any) => {
      dispatch({
        type: Dispatches.SET_LOADING_CONTACT,
        payload: true,
      });
      try {
        const response = await serviceGetContactDetail(id);
        dispatch({
          type: Dispatches.SET_CONTACT_DETAIL,
          payload: response.data.data,
        });
        cb(true);
      } catch (error: any) {
        cb(false);
        if (error?.response?.data?.message) {
          Alert.alert(error?.response?.data?.message);
        } else {
          Alert.alert('Lagi ada masalah nih');
        }
      }
      dispatch({
        type: Dispatches.SET_LOADING_CONTACT,
        payload: false,
      });
    },
  deleteContact:
    (id: string, cb: (val: boolean) => void) => async (dispatch: any) => {
      dispatch({
        type: Dispatches.SET_LOADING_CONTACT,
        payload: true,
      });
      try {
        await serviceDeleteContact(id);
        cb(true);
      } catch (error: any) {
        cb(false);
        if (error?.response?.data?.message) {
          Alert.alert(error?.response?.data?.message);
        } else {
          Alert.alert('Lagi ada masalah nih');
        }
      }
      dispatch({
        type: Dispatches.SET_LOADING_CONTACT,
        payload: false,
      });
    },
  addContactList:
    (payload: object, cb: (val: boolean) => void) => async (dispatch: any) => {
      dispatch({
        type: Dispatches.SET_LOADING_CONTACT,
        payload: true,
      });
      try {
        await serviceAddContact(payload);
        cb(true);
      } catch (error: any) {
        // console.log('error ==> ', error);
        if (error?.response?.data?.message) {
          Alert.alert(error?.response?.data?.message);
        } else {
          Alert.alert('Lagi ada masalah nih');
        }
      }
      dispatch({
        type: Dispatches.SET_LOADING_CONTACT,
        payload: false,
      });
    },
  editContactList:
    (id: string, payload: object, cb: (val: boolean) => void) =>
    async (dispatch: any) => {
      dispatch({
        type: Dispatches.SET_LOADING_CONTACT,
        payload: true,
      });
      try {
        await serviceEditContact(id, payload);
        cb(true);
      } catch (error: any) {
        // console.log('error ==> ', error);
        if (error?.response?.data?.message) {
          Alert.alert(error?.response?.data?.message);
        } else {
          Alert.alert('Lagi ada masalah nih');
        }
      }
      dispatch({
        type: Dispatches.SET_LOADING_CONTACT,
        payload: false,
      });
    },
};
