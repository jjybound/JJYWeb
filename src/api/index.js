import http from "@/utils/http";

//登录
export const JJYLogin = (userData) => {
    return http.post("/users/login", userData);
    
};