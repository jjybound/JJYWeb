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
//图片
export const JJYImg = (pageNum,pageSize) => {
    return http.get(`cl/list?pageNum=${pageNum}&pageSize=${pageSize}`);
};
//接受弹幕
export const JJYDanmu = (ImgId) => {
    return http.get(`cl/danmu?ImgId=${ImgId}`);
};
//发送弹幕
export const JJYSendDanmu = (data) => {
    return http.post(`cl/add`,data);
};