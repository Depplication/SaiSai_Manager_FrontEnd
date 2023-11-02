import React, { useState } from "react";
import * as RM from "../../styles/MemberMngmn/RetailerMngmn.style";
import { useNavigate } from "react-router-dom";
import RetailerMemberInfoEdit from "./RetailerMemberInfoEdit";
//import useRetailerMngmn from "../../hooks/Auth/useRetailerMngmn";

function RetailerMngmn() {
  const navigate = useNavigate();

  const [dataFromServer, setDataFromServer] = useState([
    {
      idx: 1,
      id: "username",
      password: "password",
      name: "이름",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      bank: "NH 농협",
      accountNumber: "3561-4877-84523",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 2,
      id: "username",
      password: "password",
      name: "이름",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      bank: "NH 농협",
      accountNumber: "3561-4877-84523",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 3,
      id: "username",
      password: "password",
      name: "이름",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      bank: "NH 농협",
      accountNumber: "3561-4877-84523",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 4,
      id: "username",
      password: "password",
      name: "이름",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      bank: "NH 농협",
      accountNumber: "3561-4877-84523",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 5,
      id: "username",
      password: "password",
      name: "이름",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      bank: "NH 농협",
      accountNumber: "3561-4877-84523",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 6,
      id: "username",
      password: "password",
      name: "이름",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      bank: "NH 농협",
      accountNumber: "3561-4877-84523",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 7,
      id: "username",
      password: "password",
      name: "이름",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      bank: "NH 농협",
      accountNumber: "3561-4877-84523",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 8,
      id: "username",
      password: "password",
      name: "이름",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      bank: "NH 농협",
      accountNumber: "3561-4877-84523",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 9,
      id: "username",
      password: "password",
      name: "이름",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      bank: "NH 농협",
      accountNumber: "3561-4877-84523",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 10,
      id: "username",
      password: "password",
      name: "이름",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      bank: "NH 농협",
      accountNumber: "3561-4877-84523",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 11,
      id: "username",
      password: "password",
      name: "이름",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      bank: "NH 농협",
      accountNumber: "3561-4877-84523",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
    {
      idx: 12,
      id: "username",
      password: "password",
      name: "이름",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-4180-3331",
      bank: "NH 농협",
      accountNumber: "3561-4877-84523",
      joinDate: "2023-10-16",
      endDate: "2023-10-16",
    },
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleEditClick = (data) => {
    setSelectedData(data);
    setIsPopupOpen(true);
  };

  const handleDelete = (idx) => {
    setDataFromServer((prevData) =>
      prevData.filter((item) => item.idx !== idx)
    );
  };

  const handleEditSubmit = (editData) => {
    setDataFromServer((prevData) => {
      return prevData.map((item) =>
        item.idx === editData.idx ? editData : item
      );
    });

    setIsPopupOpen(false);
  };

  return (
    <RM.RetailerMngmnLayout>
      <RM.RetailerMngmnContainer>
        <RM.MoveContainer>
          <RM.MoveDiv>
            <RM.MoveUserItem onClick={() => navigate("/usermngmn")}>
              주민
            </RM.MoveUserItem>
            <RM.MoveRetailerItem onClick={() => navigate("/retailermngmn")}>
              업주
            </RM.MoveRetailerItem>
          </RM.MoveDiv>
        </RM.MoveContainer>
        <RM.TableContainer>
          <RM.TableWrapper>
            <RM.RetailerMemberTable>
              <RM.HeaderThead>
                <RM.HeaderTr>
                  <RM.HeaderIdx></RM.HeaderIdx>
                  <RM.HeaderName>이름</RM.HeaderName>
                  <RM.HeaderAccountNumber>계좌번호</RM.HeaderAccountNumber>
                  <RM.HeaderPhone>전화번호</RM.HeaderPhone>
                  <RM.HeaderBank>은행</RM.HeaderBank>
                  <RM.HeaderJoinDate>가입일</RM.HeaderJoinDate>
                  <RM.HeaderEndDate>최근접속일</RM.HeaderEndDate>
                  <RM.HeaderNote colSpan="2">비고</RM.HeaderNote>
                </RM.HeaderTr>
              </RM.HeaderThead>

              {dataFromServer.map((data) => (
                <RetailerTable
                  key={data.idx}
                  data={data}
                  onDelete={handleDelete}
                  onEdit={handleEditClick}
                />
              ))}
            </RM.RetailerMemberTable>

            {isPopupOpen && (
              <RetailerMemberInfoEdit
                data={selectedData}
                onClose={handleEditSubmit}
              />
            )}
          </RM.TableWrapper>
        </RM.TableContainer>
      </RM.RetailerMngmnContainer>
    </RM.RetailerMngmnLayout>
  );
}

function RetailerTable({ data, onDelete, onEdit }) {
  const handleDeleteClick = () => {
    onDelete(data.idx);
  };

  const handleEditClick = () => {
    onEdit(data);
  };

  return (
    <RM.BodyTbody>
      <RM.BodyTr>
        <RM.BodyIdx>{data.idx}</RM.BodyIdx>
        <RM.BodyName>{data.name}</RM.BodyName>
        <RM.BodyAccountNumber>{data.accountNumber}</RM.BodyAccountNumber>
        <RM.BodyPhone>{data.phone}</RM.BodyPhone>
        <RM.BodyBank>{data.bank}</RM.BodyBank>
        <RM.BodyJoinDate>{data.joinDate}</RM.BodyJoinDate>
        <RM.BodyEndDate>{data.endDate}</RM.BodyEndDate>
        <RM.BodyNote>
          <RM.Retouch onClick={handleEditClick}>수정 </RM.Retouch>
          <RM.Delete onClick={handleDeleteClick}>삭제</RM.Delete>
        </RM.BodyNote>
      </RM.BodyTr>
    </RM.BodyTbody>
  );
}

export default RetailerMngmn;
