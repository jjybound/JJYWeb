import http from "../utils/http";

//登录
export const JJYLogin = (userData) => {
    console.log('发送登录请求，请求数据：', userData);
    return http.post("/users/login", userData);
};


//注册
export const JJYRegister = (userData) => {
    return http.post("/users/register", userData);
};