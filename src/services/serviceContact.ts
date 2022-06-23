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

export const serviceAddContact = async (payload: object) => {
  try {
    const apiFetch = await API.post('/contact', payload);
    return Promise.resolve(apiFetch);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const serviceEditContact = async (id: string, payload: object) => {
  try {
    const apiFetch = await API.put(`/contact/${id}`, payload);
    return Promise.resolve(apiFetch);
  } catch (error) {
    return Promise.reject(error);
  }
};
