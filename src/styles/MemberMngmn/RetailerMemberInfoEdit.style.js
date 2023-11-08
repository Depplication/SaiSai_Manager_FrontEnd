import { styled } from "styled-components";

export const RetailerInfoEditLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  margin-top: 5rem;
`;

export const RetailerInfoEditContainer = styled.div`
  width: 65rem;
  height: 37.688rem;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ff6362;
`;

export const Horizontal = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;
`;

export const MoveButtonDiv = styled.div`
  width: 11rem;
  height: 3rem;

  margin-bottom: 5%;
`;

export const Cancel = styled.button`
  width: 5rem;
  height: 3rem;

  margin-right: 1rem;

  border: none;
  border-radius: 0.5rem;
  background-color: #fff;

  font-size: 1.125rem;
  font-weight: bold;
  color: #ff8281;

  cursor: pointer;
`;

export const Edit = styled.button`
  width: 5rem;
  height: 3rem;

  border: none;
  border-radius: 0.5rem;
  background-color: #ff8281;

  font-size: 1.125rem;
  font-weight: bold;
  color: #fff;

  cursor: pointer;
`;

//이름
export const NameDiv = styled.div`
  width: 32rem;
  height: 4.688rem;

  margin-right: 1rem;
`;

export const NameLabel = styled.label`
  display: block;

  font-size: 1rem;
  color: #797979;
`;

export const NameInput = styled.input`
  width: 30.5rem;
  height: 3rem;

  border: none;
  border-bottom: 0.125rem solid #d9d9d9;
  outline: none;

  font-size: 1rem;
  color: #797979;
  padding-inline-start: 0.75rem;
  padding-inline-end: 0.75rem;

  &::placeholder {
    font-size: 1rem;
    color: #d9d9d9;
  }
`;

//아이디
export const IdDiv = styled.div`
  width: 32rem;
  height: 4.688rem;
`;

export const IdLabel = styled.label`
  display: block;

  font-size: 1rem;
  color: #797979;
`;

export const IdInput = styled.input`
  width: 30.5rem;
  height: 3rem;

  border: none;
  border-bottom: 0.125rem solid #d9d9d9;
  outline: none;

  font-size: 1rem;
  color: #797979;
  padding-inline-start: 0.75rem;
  padding-inline-end: 0.75rem;

  &::placeholder {
    font-size: 1rem;
    color: #d9d9d9;
  }
`;

//이메일
export const EmailDiv = styled.div`
  width: 32rem;
  height: 4.688rem;

  margin-right: 1rem;
`;

export const EmailLabel = styled.label`
  display: block;

  font-size: 1rem;
  color: #797979;
`;

export const EmailInput = styled.input`
  width: 30.5rem;
  height: 3rem;

  border: none;
  border-bottom: 0.125rem solid #d9d9d9;
  outline: none;

  font-size: 1rem;
  color: #797979;
  padding-inline-start: 0.75rem;
  padding-inline-end: 0.75rem;

  &::placeholder {
    font-size: 1rem;
    color: #d9d9d9;
  }
`;

//비밀번호
export const PasswordDiv = styled.div`
  width: 32rem;
  height: 4.688rem;
`;

export const PasswordLabel = styled.label`
  display: block;

  font-size: 1rem;
  color: #797979;
`;

export const PasswordInput = styled.input`
  width: 30.5rem;
  height: 3rem;

  border: none;
  border-bottom: 0.125rem solid #d9d9d9;
  outline: none;

  font-size: 1rem;
  color: #797979;
  padding-inline-start: 0.75rem;
  padding-inline-end: 0.75rem;

  &::placeholder {
    font-size: 1rem;
    color: #d9d9d9;
  }
`;

//은행
export const BankDiv = styled.div`
  width: 32rem;
  height: 4.688rem;

  margin-right: 1rem;
`;

export const BankLabel = styled.label`
  display: block;

  font-size: 1rem;
  color: #797979;
`;

export const BankInput = styled.input`
  width: 30.5rem;
  height: 3rem;

  border: none;
  border-bottom: 0.125rem solid #d9d9d9;
  outline: none;

  font-size: 1rem;
  color: #797979;
  padding-inline-start: 0.75rem;
  padding-inline-end: 0.75rem;

  &::placeholder {
    font-size: 1rem;
    color: #d9d9d9;
  }
`;

//비밀번호재확인
export const PasswordCheckDiv = styled.div`
  width: 32rem;
  height: 4.688rem;
`;

export const PasswordCheckLabel = styled.label`
  display: block;

  font-size: 1rem;
  color: #797979;
`;

export const PasswordCheckInput = styled.input`
  width: 30.5rem;
  height: 3rem;

  border: none;
  border-bottom: 0.125rem solid #d9d9d9;
  outline: none;

  font-size: 1rem;
  color: #797979;
  padding-inline-start: 0.75rem;
  padding-inline-end: 0.75rem;

  &::placeholder {
    font-size: 1rem;
    color: #d9d9d9;
  }
`;

//계좌번호
export const AccountNumberDiv = styled.div`
  width: 32rem;
  height: 4.688rem;

  margin-right: 1rem;
`;

export const AccountNumberLabel = styled.label`
  display: block;

  font-size: 1rem;
  color: #797979;
`;

export const AccountNumberInput = styled.input`
  width: 30.5rem;
  height: 3rem;

  border: none;
  border-bottom: 0.125rem solid #d9d9d9;
  outline: none;

  font-size: 1rem;
  color: #797979;
  padding-inline-start: 0.75rem;
  padding-inline-end: 0.75rem;

  &::placeholder {
    font-size: 1rem;
    color: #d9d9d9;
  }
`;

//날짜
export const DateInfoDiv = styled.div`
  width: 32rem;
  height: 4.688rem;

  display: flex;
  justify-content: space-between;
`;

//가입일
export const JoinDateDiv = styled.div`
  width: 15.5rem;
  height: 4.688rem;

  margin-right: 1rem;
`;

export const JoinDateLabel = styled.label`
  display: block;

  font-size: 1.25rem;
  font-weight: bold;
  color: #ff6362;
`;

export const JoinDateInput = styled.input`
  position: relative;
  border: none;
  outline: none;
  margin-top: 0.5rem;

  &:valid {
    font-size: 1rem;
    font-weight: bold;
    color: #000;
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    opacity: 0;

    width: 100%;
    cursor: pointer;
  }
`;

//최근접속일
export const EndDateDiv = styled.div`
  width: 15.5rem;
  height: 4.688rem;
`;

export const EndDateLabel = styled.label`
  display: block;

  font-size: 1.25rem;
  font-weight: bold;
  color: #ff6362;
`;

export const EndDateInput = styled.input`
  position: relative;
  border: none;
  outline: none;
  margin-top: 0.5rem;

  &:valid {
    font-size: 1rem;
    font-weight: bold;
    color: #000;
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    opacity: 0;
    width: 100%;
    cursor: pointer;
  }
`;
