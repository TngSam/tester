import axios from 'axios';

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
    'Access-Control-Allow-Methods': 'POST,GET,OPTIONS'
  }
});

export default api;
