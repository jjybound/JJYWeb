import axios from 'axios';

const http = axios.create({
  baseURL: 'https://apitest.myweixue.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
