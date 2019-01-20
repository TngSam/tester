import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8000/',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization, If-None-Match, Accept-language",
    'Access-Control-Allow-Methods': 'POST,GET,OPTIONS'
  },
  transformResponse: [
    data => {
      console.log(data);
      return data;
    }
  ]
});

export default api;
