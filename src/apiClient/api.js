import axios from 'axios';
import * as _ from 'lodash';
import { BASE_URL } from './apiConstants';

const axiosInstances = axios.create({
  baseURL: BASE_URL,
  validateStatus: status => status >= 200 && status < 300,
});

const fireRequest = async (method, url, data) => {
  let headers = { 'Content-Type': 'application/json' };
  console.log(method, url, data, 'data::::::');
  const options = {
    method,
    data: (method === 'POST' && data) || (method === 'PUT' && data),
    mode: 'web',
    headers: headers,
    params: _.get(data, 'params', undefined),
  };
  try {
    return await axiosInstances(url, options);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  get(url, data) {
    return fireRequest('GET', url, data);
  },

  post(url, data) {
    return fireRequest('POST', url, data);
  },

  put(url, data) {
    return fireRequest('PUT', url, data);
  },

  delete(url, data) {
    return fireRequest('DELETE', url, data);
  },

  axios() {
    return axiosInstances;
  },
};
