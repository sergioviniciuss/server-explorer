import { instance, setToken } from "./axiosConfig";
import { ENDPOINTS } from "../constants";

export const getAuthToken = async ({ username, password }) => {
  try {
    const response = await instance.post(ENDPOINTS.authorization, {
      username,
      password,
    });
    if (response?.data?.token) {
      setToken(response.data.token);
    } else {
      throw new Error("Failed authentication");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getServersList = async () => {
  try {
    const response = await instance.get(ENDPOINTS.servers);

    return response?.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
