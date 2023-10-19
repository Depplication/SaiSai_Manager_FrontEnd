import styled from "styled-components";

export const parents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const mainbox = styled.div``;

export const id = styled.label`
  color: var(--gray-diongray-350, #797979);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  /* position: absolute; */ /* 이 줄을 제거하여 절대 위치 설정을 해제하세요 */
`;

export const idfield = styled.div`
  margin-bottom: 20px;
`;

export const logo = styled.svg`
  margin-left: 220px;
`;

export const title = styled.div`
  color: var(--main-dionpink-300, #ff6362);
  /* Android/Bold/Body 1 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 160% */
  margin-left: 205px;
`;

export const idInput = styled.input`
  display: flex;
  width: 512px;
  height: 48px;
  padding: 0px 12px;
  align-items: center;
  gap: 10px;
  /* position: absolute; */ /* 이 줄을 제거하여 절대 위치 설정을 해제하세요 */
  border: 1px solid white; /* border 스타일을 수정 */
  border-bottom: 2px solid var(--gray-diongray-150, #d9d9d9);
  outline: none;

  &::placeholder {
    color: #d9d9d9;
  }
`;

export const password = styled.label`
  color: var(--gray-diongray-350, #797979);

  /* Android/Medium/Body 8 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;

export const pass = styled.div`
  margin-bottom: 100px;
`;

export const logButton = styled.button`
  display: flex;
  width: 512px;
  height: 48px;
  padding: 8px 130px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--main-dionpink-250, #ff8281);
  color: var(--essential-dionwhite, #fff);
  text-align: center;
  border: none;

  /* Android/Bold/Body 3 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 155.556% */
  position: absolute;
`;

export const passInput = styled.input`
  display: flex;
  width: 512px;
  height: 48px;
  padding: 0px 12px;
  align-items: center;
  gap: 10px;
  /* position: absolute; */ /* 이 줄을 제거하여 절대 위치 설정을 해제하세요 */
  border: 1px solid white; /* border 스타일을 수정 */
  border-bottom: 2px solid var(--gray-diongray-150, #d9d9d9);
  outline: none;

  &::placeholder {
    color: #d9d9d9;
  }
`;
