import {Dispatches} from '../../constant';
import {
  serviceGetContactDetail,
  serviceGetContactList,
} from '../../services/serviceContact';

export default {
  getContactList: () => async (dispatch: any) => {
    dispatch({
      type: Dispatches.SET_LOADING_CONTACT,
      payload: true,
    });
    try {
      const response = await serviceGetContactList();
      dispatch({
        type: Dispatches.SET_CONTACT_LIST,
        payload: response.data,
      });
    } catch (error) {
      // console.log(error);
    }
    dispatch({
      type: Dispatches.SET_LOADING_CONTACT,
      payload: false,
    });
  },
  getContactDetail: (id: string) => async (dispatch: any) => {
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
    } catch (error) {
      // console.log(error);
    }
    dispatch({
      type: Dispatches.SET_LOADING_CONTACT,
      payload: false,
    });
  },
};
