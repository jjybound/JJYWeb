import axios from 'axios';

const http = axios.create({
  baseURL: 'http://115.29.186.194/jjy',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
