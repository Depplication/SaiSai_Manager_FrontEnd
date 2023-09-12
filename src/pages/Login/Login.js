import React from "react";
import * as L from "../../styles/Login/Login.style";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  return (
    <>
      <p>아이디</p>
      <input type="id" className="id" placeholder="아이디를 입력하세요."></input>
      <p>비밀번호</p>
      <input type="password" className="password" placeholder="비밀번호를 입력하세요."></input>
      <button className="loginb" onClick={() => navigate("/")}>로그인</button>
    </>
  );
}

export default Login;
