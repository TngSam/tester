import axios from 'axios';

import store from 'store';
import { storeToken } from 'store/actions';

/**
 * Basic API client
 * @type {AxiosInstance}
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8000/',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization, If-None-Match, Accept-language",
    'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',
    'Authorization': 'Bearer undefined'
  },
  transformResponse: [data => {
    data = JSON.parse(data);

    if (data.token) {
      store.dispatch(storeToken(data.token));
    }
    console.log(store.getState().auth.token);

    return data;
  }]
});

axios.interceptors.request.use(
  config => {
    if (!config.headers.Authorization) {
      const token = store.getState().auth.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  error => Promise.reject(error)
);

export default api;
