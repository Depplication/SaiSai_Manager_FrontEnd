import React from "react";
import * as H from "../../styles/Header/Header";
import logo from "../../asset/img/saisai_HeaderLogo.svg";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isMemberMngmn =
    location.pathname.includes("/usermngmn") ||
    location.pathname.includes("/retailermngmn") ||
    location.pathname.includes("/userinfoedit") ||
    location.pathname.includes("/retailerinfoedit");

  const isStoreMngmn =
    location.pathname.includes("/storemngmn") ||
    location.pathname.includes("/storemngmnedit");

  const isCalculate =
    location.pathname.includes("/paymenthistory") ||
    location.pathname.includes("/pointhistory");

  const isCustomerCenter = location.pathname.includes("/customercenter");

  const isEvent = location.pathname.includes("/event");
  return (
    <H.HeaderLayout>
      <H.Logo src={logo} />
      <H.MenuDiv>
        <H.MemberMngmnDiv
          onClick={() => {
            navigate("/usermngmn");
          }}
          isMemberMngmn={isMemberMngmn}
        >
          <H.MemberMngmn isMemberMngmn={isMemberMngmn}>회원관리</H.MemberMngmn>
        </H.MemberMngmnDiv>
        <H.StoreMngmnDiv
          onClick={() => {
            navigate("/storemngmn");
          }}
          isStoreMngmn={isStoreMngmn}
        >
          <H.StoreMngmn isStoreMngmn={isStoreMngmn}>가게관리</H.StoreMngmn>
        </H.StoreMngmnDiv>
        <H.CalculateDiv
          onClick={() => {
            navigate("/paymenthistory");
          }}
          isCalculate={isCalculate}
        >
          <H.Calculate isCalculate={isCalculate}>정산</H.Calculate>
        </H.CalculateDiv>
        <H.CustomerCenterDiv
          onClick={() => {
            navigate("/customercenter");
          }}
          isCustomerCenter={isCustomerCenter}
        >
          <H.CustomerCenter isCustomerCenter={isCustomerCenter}>
            고객센터
          </H.CustomerCenter>
        </H.CustomerCenterDiv>
        <H.EventDiv
          onClick={() => {
            navigate("/event");
          }}
          isEvent={isEvent}
        >
          <H.Event isEvent={isEvent}>이벤트</H.Event>
        </H.EventDiv>
      </H.MenuDiv>
    </H.HeaderLayout>
  );
}

export default Header;
