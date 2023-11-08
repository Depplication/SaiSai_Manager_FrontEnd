import React, { useEffect, useState } from "react";
import * as UME from "../../styles/MemberMngmn/UserMemberInfoEdit.style";
import { useNavigate, useParams } from "react-router-dom";
import { UserList } from "../../constant/userlist";
import axios from "axios";
import useUser from "../../hooks/RetailerManagemn/useRetailer";

function UserMemberInfoEdit() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const [userList, setUserList] = useState([]);

  const { getUserList } = useUser();

  const fetchUser = async ({ page, size }) => {
    const data = await getUserList({ page, size });
    setUserList(data.list);
  };

  useEffect(() => {
    fetchUser({ page: 1, size: 20 });
  }, []);

  const userInfo = userList.find((user) => id === user.id);

  useEffect(() => {
    console.log(userList);
    console.log(userInfo);
  }, [userList]);

  const updateUser = () => {
    axios.patch(
      `/admin/user/update?name=${name}&id=${userId}&email=${email}&password=${password}&passwordcheck=${passwordCheck}&phone=${phone}&address=${address}&detailAddress=${detailAddress}`
    );

    navigate("/usermngmn");
  };

  return (
    <UME.UserInfoEditLayout>
      <UME.UserInfoEditForm onSubmit={updateUser}>
        <UME.Horizontal>
          <UME.Title>주민 정보 수정</UME.Title>
          <UME.MoveButtonDiv>
            <UME.Cancel onClick={() => navigate("/usermngmn")}>취소</UME.Cancel>
            <UME.Edit value="수정" type="submit" />
          </UME.MoveButtonDiv>
        </UME.Horizontal>
        <UME.Horizontal>
          <UME.NameDiv>
            <UME.NameLabel>이름</UME.NameLabel>
            <UME.NameInput
              type="text"
              placeholder={userInfo?.name}
              onChange={(e) => setName(e.target.value)}
            ></UME.NameInput>
          </UME.NameDiv>
          <UME.IdDiv>
            <UME.IdLabel>아이디</UME.IdLabel>
            <UME.IdInput
              type="text"
              placeholder={userInfo?.id}
              onChange={(e) => setUserId(e.target.value)}
            ></UME.IdInput>
          </UME.IdDiv>
        </UME.Horizontal>
        <UME.Horizontal>
          <UME.EmailDiv>
            <UME.EmailLabel>이메일</UME.EmailLabel>
            <UME.EmailInput
              type="email"
              placeholder={userInfo?.email}
              onChange={(e) => setEmail(e.target.value)}
            ></UME.EmailInput>
          </UME.EmailDiv>
          <UME.PasswordDiv>
            <UME.PasswordLabel>비밀번호</UME.PasswordLabel>
            <UME.PasswordInput
              type="password"
              placeholder="새 비밀번호를 입력해 주세요."
              onChange={(e) => setPassword(e.target.value)}
            ></UME.PasswordInput>
          </UME.PasswordDiv>
        </UME.Horizontal>
        <UME.Horizontal>
          <UME.PhoneDiv>
            <UME.PhoneLabel>전화번호</UME.PhoneLabel>
            <UME.PhoneInput
              type="text"
              placeholder={userInfo?.phone}
              onChange={(e) => setPhone(e.target.value)}
            ></UME.PhoneInput>
          </UME.PhoneDiv>
          <UME.PasswordCheckDiv>
            <UME.PasswordCheckLabel>비밀번호 재확인</UME.PasswordCheckLabel>
            <UME.PasswordCheckInput
              type="password"
              placeholder="비밀번호를 한 번 더 입력해 주세요."
              onChange={(e) => setPasswordCheck(e.target.value)}
            ></UME.PasswordCheckInput>
          </UME.PasswordCheckDiv>
        </UME.Horizontal>
        <UME.Horizontal>
          <UME.AddressDiv>
            <UME.AddressLabel>주소</UME.AddressLabel>
            <UME.AddressInput
              type="text"
              placeholder={userInfo?.address}
              onChange={(e) => setAddress(e.target.value)}
            ></UME.AddressInput>
            <UME.DetailAddressInput
              type="text"
              placeholder={userInfo?.detailAddress}
              onChange={(e) => setDetailAddress(e.target.value)}
            ></UME.DetailAddressInput>
          </UME.AddressDiv>
          <UME.Vertical>
            <UME.Horizontal>
              <UME.GenderDiv>
                <UME.GenderLabel>성별</UME.GenderLabel>
                <UME.GenderSelect>
                  <UME.GenderOption>남자</UME.GenderOption>
                  <UME.GenderOption>여자</UME.GenderOption>
                </UME.GenderSelect>
              </UME.GenderDiv>
              <UME.AgeDiv>
                <UME.AgeLabel>연령대</UME.AgeLabel>
                <UME.AgeSelect>
                  <UME.AgeOption>10대</UME.AgeOption>
                  <UME.AgeOption>20대</UME.AgeOption>
                  <UME.AgeOption>30대</UME.AgeOption>
                  <UME.AgeOption>40대</UME.AgeOption>
                  <UME.AgeOption>50대</UME.AgeOption>
                  <UME.AgeOption>60대</UME.AgeOption>
                  <UME.AgeOption>70대</UME.AgeOption>
                  <UME.AgeOption>80대</UME.AgeOption>
                  <UME.AgeOption>90대</UME.AgeOption>
                </UME.AgeSelect>
              </UME.AgeDiv>
            </UME.Horizontal>
            <UME.DateInfoDiv>
              <UME.JoinDateDiv>
                <UME.JoinDateLabel>가입일</UME.JoinDateLabel>
                <UME.JoinDateInput type="text" value="2023-11-06" readOnly />
              </UME.JoinDateDiv>
              <UME.EndDateDiv>
                <UME.EndDateLabel>최근접속일</UME.EndDateLabel>
                <UME.EndDateInput type="text" value="2023-11-06" readOnly />
              </UME.EndDateDiv>
            </UME.DateInfoDiv>
          </UME.Vertical>
        </UME.Horizontal>
      </UME.UserInfoEditForm>
    </UME.UserInfoEditLayout>
  );
}

export default UserMemberInfoEdit;
