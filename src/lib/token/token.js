import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../constant/token";
import cookieStore from "../cookie/cookie";

const tokenStore = () => {
  const { getCookie, setCookie, removeCookie } = cookieStore();

  const getToken = (key) => {
    return getCookie(key);
  };

  const setToken = (key, token) => {
    setCookie(key, token);
  };

  const clearToken = () => {
    removeCookie(ACCESS_TOKEN_KEY);
    removeCookie(REFRESH_TOKEN_KEY);
  };
  return { getToken, setToken, clearToken };
};

export default tokenStore;
