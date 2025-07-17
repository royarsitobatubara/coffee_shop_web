import http from "./http.js";
import ENDPOINTS from "./endpoints.js";

export const fetchAllProducts = () => http.get(ENDPOINTS.PRODUCTS);

export const getProductByID = (id) => http.get(`${ENDPOINTS.PRODUCTS}/${id}`);

export const createProduct = (formData) => {
    return http.post(ENDPOINTS.PRODUCTS, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const deleteProductByID = (id) => http.delete(`${ENDPOINTS.PRODUCTS}/${id}`);

export const updateProduct = (id, formData) => {
    return http.patch(`${ENDPOINTS.PRODUCTS}/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
