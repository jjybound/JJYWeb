import http from "../utils/http";

//登录
export const JJYLogin = async(userData) => {
    return await http.post("/users/login", userData);
    
};