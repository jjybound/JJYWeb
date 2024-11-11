import axios from 'axios';

const http = axios.create({
  baseURL: 'http://47.97.62.222/jjy',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  // 在发送请求之前做些什么
  console.log('请求拦截器 - 请求发送前:', config);
  if (token) {
    config.headers['token'] = `Bearer ${token}`;
  }

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('响应拦截器 - 收到响应:', response);
  return response;
}, function (error) {
  console.log(error)
  // 对响应错误做点什么
  if (error.response.status === 403) {
    // 如果是403错误，重定向到首页
    window.location.href = '/';
  }
  return Promise.reject(error);
});

export default http;
