import axios from "axios";
import { BASE_URL, ENDPOINTS } from "../constants";

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    if (
      config.url !== ENDPOINTS.authorization &&
      !config.headers.common["Authorization"]
    ) {
      throw new Error("Missing token");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setToken = (token) => {
  instance.defaults.headers.common["Authorization"] = token;
};
