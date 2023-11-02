import axios from "axios";
import { useState } from "react";
import tokenStore from "../../lib/token/token";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../constant/token";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../lib/axios/axios";
import CONFIG from "../../config/config.json";

const useLogin = () => {
  const [loginData, setLoginData] = useState({
    accessToken: "",
    refreshToken: "",
    adminId: "",
  });

  const { setToken } = tokenStore();
  const navigation = useNavigate();

  const postLogin = async ({ id, password }) => {
    console.log("hihihihihihihihi");
    try {
      const { data } = await axios.post(`${CONFIG.SERVER}/admin/sign-in`, {
        id,
        password,
      });
      setLoginData(data);
      setToken(ACCESS_TOKEN_KEY, data.accessToken);
      setToken(REFRESH_TOKEN_KEY, data.refreshToken);
      console.log("로그인 성공");
      console.log(data);
      navigation("/");
    } catch (e) {
      console.log("로그인 실패");
    }
  };

  return {
    postLogin,
  };
};

export default useLogin;
