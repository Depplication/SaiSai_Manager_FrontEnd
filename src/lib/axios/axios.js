import axios from "axios";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "../../constant/token";
import tokenStore from "../token/token";
import CONFIG from "../../config/config.json";

const { getToken } = tokenStore();

export const customAxios = axios.create({
  baseURL: CONFIG.SERVER,
  [REQUEST_TOKEN_KEY]: `Bearer ${getToken(ACCESS_TOKEN_KEY)}`,
});
