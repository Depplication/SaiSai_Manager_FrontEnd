import React, { useState } from "react";
import * as RME from "../../styles/MemberMngmn/RetailerMemberInfoEdit.style";
import { useNavigate, useParams } from "react-router-dom";
import { RetailerList } from "../../constant/retailerlist";

function RetailerMemberInfoEdit() {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const retailerInfo = RetailerList.find((retailer) => id === retailer.id);

  return (
    <RME.RetailerInfoEditLayout>
      <RME.RetailerInfoEditContainer>
        <RME.Horizontal>
          <RME.Title>업주 정보 수정</RME.Title>
          <RME.MoveButtonDiv>
            <RME.Cancel onClick={() => navigate("/retailermngmn")}>
              취소
            </RME.Cancel>
            <RME.Edit>수정</RME.Edit>
          </RME.MoveButtonDiv>
        </RME.Horizontal>
        <RME.Horizontal>
          <RME.NameDiv>
            <RME.NameLabel>이름</RME.NameLabel>
            <RME.NameInput
              type="text"
              placeholder={retailerInfo.name}
            ></RME.NameInput>
          </RME.NameDiv>
          <RME.IdDiv>
            <RME.IdLabel>아이디</RME.IdLabel>
            <RME.IdInput
              type="text"
              placeholder={retailerInfo.id}
            ></RME.IdInput>
          </RME.IdDiv>
        </RME.Horizontal>
        <RME.Horizontal>
          <RME.EmailDiv>
            <RME.EmailLabel>이메일</RME.EmailLabel>
            <RME.EmailInput
              type="email"
              placeholder={retailerInfo.email}
            ></RME.EmailInput>
          </RME.EmailDiv>
          <RME.PasswordDiv>
            <RME.PasswordLabel>비밀번호</RME.PasswordLabel>
            <RME.PasswordInput
              type="password"
              placeholder="새 비밀번호를 입력해 주세요."
            ></RME.PasswordInput>
          </RME.PasswordDiv>
        </RME.Horizontal>
        <RME.Horizontal>
          <RME.BankDiv>
            <RME.BankLabel>은행</RME.BankLabel>
            <RME.BankInput
              type="text"
              placeholder={retailerInfo.bank}
            ></RME.BankInput>
          </RME.BankDiv>
          <RME.PasswordCheckDiv>
            <RME.PasswordCheckLabel>비밀번호 재확인</RME.PasswordCheckLabel>
            <RME.PasswordCheckInput
              type="password"
              placeholder="비밀번호를 한 번 더 입력해 주세요."
            ></RME.PasswordCheckInput>
          </RME.PasswordCheckDiv>
        </RME.Horizontal>
        <RME.Horizontal>
          <RME.AccountNumberDiv>
            <RME.AccountNumberLabel>계좌번호</RME.AccountNumberLabel>
            <RME.AccountNumberInput
              type="text"
              placeholder={retailerInfo.accountNumber}
            ></RME.AccountNumberInput>
          </RME.AccountNumberDiv>
          <RME.DateInfoDiv>
            <RME.JoinDateDiv>
              <RME.JoinDateLabel>가입일</RME.JoinDateLabel>
              <RME.JoinDateInput type="date"></RME.JoinDateInput>
            </RME.JoinDateDiv>
            <RME.EndDateDiv>
              <RME.EndDateLabel>최근 접속일</RME.EndDateLabel>
              <RME.EndDateInput type="date"></RME.EndDateInput>
            </RME.EndDateDiv>
          </RME.DateInfoDiv>
        </RME.Horizontal>
      </RME.RetailerInfoEditContainer>
    </RME.RetailerInfoEditLayout>
  );
}

export default RetailerMemberInfoEdit;
