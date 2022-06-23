import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'https://simple-contact-crud.herokuapp.com',
});

const apiRequest = (method: any, url: string, request?: object) => {
  return axiosAPI({
    headers: {
      'Content-type': 'Application/json',
      Accept: 'Application/json',
    },
    method,
    url,
    data: request ?? undefined,
  })
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err));
};

// function to execute the http get request
const get = (url: string) => apiRequest('get', url);

// function to execute the http delete request
const deleteRequest = (url: string) => apiRequest('delete', url);

// function to execute the http post request
const post = (url: string, request: object) => apiRequest('post', url, request);

// function to execute the http put request
const put = (url: string, request: object) => apiRequest('put', url, request);

// function to execute the http path request
const patch = (url: string, request: object) =>
  apiRequest('patch', url, request);

const API = {
  get,
  delete: deleteRequest,
  post,
  put,
  patch,
};
export default API;
