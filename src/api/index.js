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
//文章
export const JJYArticle = (pageNum,pageSize,menu,tinymenu) => {
    return http.get(`yzy/list?pageNum=${pageNum}&pageSize=${pageSize}&menu=${menu}&tinymenu=${tinymenu}`);
};