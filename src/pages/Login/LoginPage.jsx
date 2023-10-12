import React, { useState } from "react";
import useLogin from "../../hooks/Auth/useLogin";

function LoginPage() {
  const { postLogin } = useLogin();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postLogin({ id, password });
        }}
      >
        <div>
          <label htmlFor="id">아이디:</label>
          <input type="text" onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LoginPage;
