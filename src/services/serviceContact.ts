import {API} from '../helper';

export const serviceGetContactList = async () => {
  try {
    const apiFetch = await API.get('/contact', {});
    return Promise.resolve(apiFetch);
  } catch (error) {
    return Promise.reject(error);
  }
};
export const serviceGetContactDetail = async (id: string) => {
  try {
    const apiFetch = await API.get(`/contact/${id}`, {});
    return Promise.resolve(apiFetch);
  } catch (error) {
    return Promise.reject(error);
  }
};
