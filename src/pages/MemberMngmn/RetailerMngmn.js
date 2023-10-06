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
      name: "김민성",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-0000-0000",
      bank: "대구은행",
      accountNumber: "123-123456121-12",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 2,
      id: "username",
      password: "password",
      name: "임규연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-1234-1234",
      bank: "농협은행",
      accountNumber: "023-152468-42",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 3,
      id: "username",
      password: "password",
      name: "문주호",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-5644-1567",
      bank: "신한은행",
      accountNumber: "356-741581-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 5,
      id: "username",
      password: "password",
      name: "조가연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-6457-7894",
      bank: "신한은행",
      accountNumber: "356-123456-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 6,
      id: "username",
      password: "password",
      name: "조가연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-6457-7894",
      bank: "신한은행",
      accountNumber: "356-123456-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 7,
      id: "username",
      password: "password",
      name: "조가연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-6457-7894",
      bank: "신한은행",
      accountNumber: "356-123456-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 8,
      id: "username",
      password: "password",
      name: "김민성",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-0000-0000",
      bank: "대구은행",
      accountNumber: "123-123456121-12",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 9,
      id: "username",
      password: "password",
      name: "임규연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-1234-1234",
      bank: "농협은행",
      accountNumber: "023-152468-42",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 10,
      id: "username",
      password: "password",
      name: "문주호",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-5644-1567",
      bank: "신한은행",
      accountNumber: "356-741581-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 11,
      id: "username",
      password: "password",
      name: "조가연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-6457-7894",
      bank: "신한은행",
      accountNumber: "356-123456-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 12,
      id: "username",
      password: "password",
      name: "조가연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-6457-7894",
      bank: "신한은행",
      accountNumber: "356-123456-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 13,
      id: "username",
      password: "password",
      name: "조가연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-6457-7894",
      bank: "신한은행",
      accountNumber: "356-123456-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 14,
      id: "username",
      password: "password",
      name: "조가연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-6457-7894",
      bank: "신한은행",
      accountNumber: "356-123456-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 15,
      id: "username",
      password: "password",
      name: "조가연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-6457-7894",
      bank: "신한은행",
      accountNumber: "356-123456-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 16,
      id: "username",
      password: "password",
      name: "김민성",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-0000-0000",
      bank: "대구은행",
      accountNumber: "123-123456121-12",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 17,
      id: "username",
      password: "password",
      name: "임규연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-1234-1234",
      bank: "농협은행",
      accountNumber: "023-152468-42",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 18,
      id: "username",
      password: "password",
      name: "문주호",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-5644-1567",
      bank: "신한은행",
      accountNumber: "356-741581-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 19,
      id: "username",
      password: "password",
      name: "조가연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-6457-7894",
      bank: "신한은행",
      accountNumber: "356-123456-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 20,
      id: "username",
      password: "password",
      name: "조가연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-6457-7894",
      bank: "신한은행",
      accountNumber: "356-123456-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 21,
      id: "username",
      password: "password",
      name: "조가연",
      company: "사이사이",
      address: "대구광역시 달성군 구지면 창리로11길 93",
      phone: "010-6457-7894",
      bank: "신한은행",
      accountNumber: "356-123456-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
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
    <RM.RetailerMngmnLayOut>
      <RM.Box>
        <RM.RetailerMove onClick={() => navigate("/retailermngmn")}>
          업주
        </RM.RetailerMove>
        <RM.UserMove onClick={() => navigate("/usermngmn")}>주민</RM.UserMove>
      </RM.Box>
      {/* <div>
        <input type="search"></input>
        <img></img>
      </div> */}
      {/* <div>정렬</div>
      <div>필터</div> */}
      <RM.RetailerMagmnTable>
        <thead>
          <RM.Header>
            <RM.IdxTd>순번</RM.IdxTd>
            <RM.NameTd>이름</RM.NameTd>
            <RM.CompanyTd>가게명</RM.CompanyTd>
            <RM.AddressTd>주소</RM.AddressTd>
            <RM.PhoneTd>전화번호</RM.PhoneTd>
            <RM.BankTd>은행</RM.BankTd>
            <RM.AccountNumberTd>계좌번호</RM.AccountNumberTd>
            <RM.JoinDateTd>가입일</RM.JoinDateTd>
            <RM.EndDateTd>최근 접속일</RM.EndDateTd>
            <RM.Td colSpan="2">비고</RM.Td>
          </RM.Header>
        </thead>

        {dataFromServer.map((data) => (
          <RetailerTable
            key={data.idx}
            data={data}
            onDelete={handleDelete}
            onEdit={handleEditClick}
          />
        ))}
      </RM.RetailerMagmnTable>

      {isPopupOpen && (
        <RetailerMemberInfoEdit
          data={selectedData}
          onClose={handleEditSubmit}
        />
      )}
    </RM.RetailerMngmnLayOut>
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
    <tbody>
      <RM.RetailerMagmnTableTr>
        <RM.IdxTd>{data.idx}</RM.IdxTd>
        <RM.NameTd>{data.name}</RM.NameTd>
        <RM.CompanyTd>{data.company}</RM.CompanyTd>
        <RM.AddressTd>{data.address}</RM.AddressTd>
        <RM.PhoneTd>{data.phone}</RM.PhoneTd>
        <RM.BankTd>{data.bank}</RM.BankTd>
        <RM.AccountNumberTd>{data.accountNumber}</RM.AccountNumberTd>
        <RM.JoinDateTd>{data.joinDate}</RM.JoinDateTd>
        <RM.EndDateTd>{data.endDate}</RM.EndDateTd>
        <RM.Td>
          <span onClick={handleEditClick}>수정 </span>
          <span onClick={handleDeleteClick}>삭제</span>
        </RM.Td>
      </RM.RetailerMagmnTableTr>
    </tbody>
  );
}

export default RetailerMngmn;
