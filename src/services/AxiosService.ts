import axios from "axios";
import { AUTH_TOKEN, BASE_URL } from "../constants";

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
