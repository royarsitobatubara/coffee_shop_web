import ENDPOINTS from "./endpoints.js";
import http from "./http.js";

export const login = ({email, password}) => http.post(`${ENDPOINTS.AUTH}/login`, {email, password}, {
    headers: {
        "Content-Type": "application/json"
    }
});

export const logout = () => http.post(`${ENDPOINTS.AUTH}/logout`, {}, {
    headers: {
        "Content-Type": "application/json"
    }
})

export const verifyToken = () => http.post(`/me`, {}, {
    headers: {
        "Content-Type": "application/json"
    }
})