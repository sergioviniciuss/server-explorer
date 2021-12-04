import axios from "axios";
import { ENDPOINTS } from "../constants";

export const getAuthToken = async ({ username, password }) => {
  const { token } = await axios
    .post(ENDPOINTS.authorization, {
      username,
      password,
    })
    .catch((error) => console.error(error));
  return token;
};