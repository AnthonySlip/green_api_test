import axios from "axios";
import { API_URL } from "../consts/paths.ts";

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originRequest = error.config;
    if (
      !originRequest.isRetry &&
      error.response &&
      error.response.status === 401
    ) {
      try {
        originRequest.isRetry = true;
        //await AuthService.getNewAccessToken();
        return instance.request(originRequest);
      } catch (e) {
        console.error(e);
        //if (e.response.status === 401) removeTokensStorage();
      }
    }
    throw error;
  },
);

export default instance;

export const axiosClassic = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
