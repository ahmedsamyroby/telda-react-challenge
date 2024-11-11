import axios from "axios";

export const API_KEY = process.env.REACT_APP_API_KEY;
export const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    if (AUTH_TOKEN) config.headers.Authorization = `Bearer ${AUTH_TOKEN}`;
    return config;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
