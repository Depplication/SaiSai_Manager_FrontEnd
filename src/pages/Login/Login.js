import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/Auth/userLogin";

function Login() {
  const { id, password, onChange, onSubmit } = useLogin();
  const navigate = useNavigate();

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="id">아이디:</label>
          <input type="text" id="id" name="id" value={id} onChange={onChange} />
        </div> 
        {/* 화나요 */}
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <button onSubmit={onSubmit}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
