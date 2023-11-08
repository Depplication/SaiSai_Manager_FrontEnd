import { styled } from "styled-components";

export const UserMngmnLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  margin-top: 4rem;
`;
export const UserMngmnContainer = styled.div``;

export const MoveContainer = styled.div`
  background-color: #fff;
  width: 50rem;
`;

export const MoveDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  width: 19.5rem;
  height: 2.625rem;
`;

export const MoveRetailerItem = styled.div`
  width: 9.75rem;
  height: 2.625rem;
  border-bottom: 0.094rem solid #8e8e8f;

  font-size: 1rem;
  text-align: center;
  line-height: 2.625rem;
  color: #8e8e8f;

  cursor: pointer;
`;

export const MoveUserItem = styled.div`
  width: 9.75rem;
  height: 2.625rem;
  border-bottom: 0.094rem solid #ff6362;

  font-size: 1rem;
  text-align: center;
  line-height: 2.625rem;
  color: #ff6362;

  cursor: pointer;
`;

//테이블

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableWrapper = styled.div``;

export const UserMemberTable = styled.table`
  width: 100%;

  background-color: #fff;
`;

//헤더 테이블

export const HeaderThead = styled.thead`
  width: 65rem;
  height: 2.125rem;
`;

export const HeaderTr = styled.tr`
  width: 65rem;
  height: 2.125rem;
`;

export const HeaderIdx = styled.td`
  width: 5rem;
`;

export const HeaderName = styled.td`
  width: 5.5rem;

  padding-left: 0.5rem;
`;

export const HeaderAddress = styled.td`
  width: 19.813rem;

  padding-left: 0.5rem;
`;

export const HeaderPhone = styled.td`
  width: 10.813rem;

  padding-left: 0.5rem;
`;

export const HeaderJoinDate = styled.td`
  width: 9.125rem;

  padding-left: 0.5rem;
`;

export const HeaderEndDate = styled.td`
  width: 8.875rem;

  padding-left: 0.5rem;
`;

export const HeaderNote = styled.td`
  width: 6rem;

  padding-left: 0.5rem;
`;

//바디 테이블 요소
export const BodyTbody = styled.tbody`
  height: 4rem;

  font-size: 1rem;
  font-weight: bold;
`;

export const BodyTr = styled.tr``;

export const BodyIdx = styled.td``;

export const BodyName = styled.td`
  padding-left: 0.5rem;
`;

export const BodyAddress = styled.td`
  padding-left: 0.5rem;
`;

export const BodyPhone = styled.td`
  padding-left: 0.5rem;
`;

export const BodyJoinDate = styled.td`
  padding-left: 0.5rem;
`;

export const BodyEndDate = styled.td`
  padding-left: 0.5rem;
`;

export const BodyNote = styled.td`
  padding-left: 0.5rem;
`;

//비고
export const Retouch = styled.span``;
export const Delete = styled.span`
  color: #f44355;

  margin-left: 1rem;
`;
