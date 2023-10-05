import axios from "axios";
import { useState } from "react";

export function useLogin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    if (e.target.name === "id") setId(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (id && password) {
      const loginData = {
        id: id,
        password: password,
      };

      try {
        const response = await axios.post("/auth/user/sign-in", loginData);

        if (response.status === 200) {
          console.log("로그인 성공:", response.data);
          alert("로그인 성공");
        } else {
          console.error("로그인 실패:", response.data);
          alert("로그인 실패");
        }
      } catch (error) {
        console.error("오류 발생:", error);
        alert("오류 발생");
      }
    }
  };

  return { id, password, onChange, onSubmit };
}

//임규연 말미잘
