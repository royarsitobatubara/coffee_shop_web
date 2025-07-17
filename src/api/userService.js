import http from "./http.js";
import ENDPOINTS from "./endpoints.js";

export const fetchAllUser = () => http.get(ENDPOINTS.USERS);
export const getUserByID = ({id}) => http.get(`${ENDPOINTS.USERS}/${id}`);
export const updateUserByID = ({id, formdata}) => {
    return http.patch(`${ENDPOINTS.USERS}/${id}`, formdata, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })
};
export const deleteUserByID = ({id}) => http.delete(`${ENDPOINTS.USERS}/${id}`);
export const createUser = ({formdata}) => {
    return http.post(ENDPOINTS.USERS, formdata, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
};
