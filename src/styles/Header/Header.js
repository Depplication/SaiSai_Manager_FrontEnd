// HeaderStyles.js 파일

import styled from "styled-components";

export const HeaderLayout = styled.div`
  width: 90rem;
  height: 4rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.063rem solid #f5f5f5;
`;

export const Logo = styled.img`
  align-items: center;
  padding-left: 12.5rem;
`;

export const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1.5rem;
`;

//회원관리
export const MemberMngmnDiv = styled.div`
  width: 6.25rem;
  margin-right: 20px;
`;

export const MemberMngmn = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #383838;
  cursor: pointer;

  &:hover {
    color: #ff6362;
  }
`;

//가게관리
export const StoreMngmnDiv = styled.div`
  width: 6.25rem;
  margin-right: 20px;
`;

export const StoreMngmn = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #383838;
  cursor: pointer;

  &:hover {
    color: #ff6362;
  }
`;

//정산
export const CalculateDiv = styled.div`
  width: 6.25rem;
  margin-right: 20px;
`;

export const Calculate = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #383838;
  cursor: pointer;

  &:hover {
    color: #ff6362;
  }
`;

//고객센터
export const CustomerCenterDiv = styled.div`
  width: 6.25rem;
  margin-right: 20px;
`;

export const CustomerCenter = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #383838;
  cursor: pointer;

  &:hover {
    color: #ff6362;
  }
`;

//이벤트
export const EventDiv = styled.div`
  width: 6.25rem;
`;

export const Event = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #383838;
  cursor: pointer;

  &:hover {
    color: #ff6362;
  }
`;
