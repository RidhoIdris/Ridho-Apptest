import {API} from '../helper';

export const serviceGetContactList = async () => {
  try {
    const apiFetch = await API.get('/contact');
    return Promise.resolve(apiFetch);
  } catch (error) {
    // console.log('error ==> ', error);
    return Promise.reject(error);
  }
};
export const serviceGetContactDetail = async (id: string) => {
  try {
    const apiFetch = await API.get(`/contact/${id}`);
    return Promise.resolve(apiFetch);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const serviceDeleteContact = async (id: string) => {
  try {
    const apiFetch = await API.delete(`/contact/${id}`);
    return Promise.resolve(apiFetch);
  } catch (error) {
    return Promise.reject(error);
  }
};
