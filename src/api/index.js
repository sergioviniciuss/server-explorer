import axios from "axios";
import { ENDPOINTS } from "../constants";

export const getAuthToken = async ({ username, password }) => {
  try {
    const response = await axios.post(ENDPOINTS.authorization, {
      username,
      password,
    });
    return response?.data?.token;
  } catch (error) {
    const errorMessage = error?.response?.data?.error_message;
    throw new Error(errorMessage || `Unexpected error.\n${error}`);
  }
};
