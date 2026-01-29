import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const statusMessages: Record<number, string> = {
  400: "Bad request. Please check your input.",
  401: "Unauthorized. Please log in.",
  403: "Access denied.",
  404: "Resource not found.",
  500: "Server error. Please try again later.",
};

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

