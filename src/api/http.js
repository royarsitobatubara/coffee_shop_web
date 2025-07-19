import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    withCredentials: true
});

// Interceptor (opsional)
http.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.error('Unauthorized - silakan login ulang.');
        }
        return Promise.reject(error);
    }
);

export default http;
