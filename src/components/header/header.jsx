import React from "react";
import * as H from "../../styles/Header/Header";
import logo from "../../asset/img/saisai_HeaderLogo.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <H.HeaderLayout>
      <H.Logo src={logo} />
      <H.MenuDiv>
        <H.MemberMngmnDiv
          onClick={() => {
            navigate("/회원관리");
          }}
        >
          <H.MemberMngmn>회원관리</H.MemberMngmn>
        </H.MemberMngmnDiv>
        <H.StoreMngmnDiv
          onClick={() => {
            navigate("/가게관리");
          }}
        >
          <H.StoreMngmn>가게관리</H.StoreMngmn>
        </H.StoreMngmnDiv>
        <H.CalculateDiv
          onClick={() => {
            navigate("/정산");
          }}
        >
          <H.Calculate>정산</H.Calculate>
        </H.CalculateDiv>
        <H.CustomerCenterDiv
          onClick={() => {
            navigate("/고객센터");
          }}
        >
          <H.CustomerCenter>고객센터</H.CustomerCenter>
        </H.CustomerCenterDiv>
        <H.EventDiv
          onClick={() => {
            navigate("/이벤트");
          }}
        >
          <H.Event>이벤트</H.Event>
        </H.EventDiv>
      </H.MenuDiv>
    </H.HeaderLayout>
  );
}

export default Header;
