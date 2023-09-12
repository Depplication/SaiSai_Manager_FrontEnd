import React, { useState } from "react";
import * as RM from "../../styles/MemberMngmn/RetailerMngmn.style";
import { useNavigate } from "react-router-dom";
import RetailerMemberInfoEdit from "./RetailerMemberInfoEdit";
import useRetailerMngmn from "../../hooks/Auth/useRetailerMngmn";

function RetailerMngmn() {
  const navigate = useNavigate();

  const [dataFromServer, setDataFromServer] = useState([
    {
      idx: 1,
      id: "username",
      password: "password",
      name: "김민성",
      company: "사이사이",
      address: "대구광역시 창리로",
      phone: "010-0000-0000",
      bank: "대구은행",
      accountNumber: "123-123456-12",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 2,
      id: "username",
      password: "password",
      name: "임규연",
      company: "사이사이",
      address: "대구광역시 창리로",
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
      address: "대구광역시 창리로",
      phone: "010-5644-1567",
      bank: "신한은행",
      accountNumber: "356-741581-72",
      joinDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      idx: 4,
      id: "username",
      password: "password",
      name: "조가연",
      company: "사이사이",
      address: "대구광역시 창리로",
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
      <div onClick={() => navigate("/retailermngmn")}>업주</div>
      <div onClick={() => navigate("/")}>주민</div>
      <div>
        <input type="search"></input>
        <img></img>
      </div>
      <div>정렬</div>
      <div>필터</div>
      <RM.RetailerMagmnTable>
        <thead>
          <tr>
            <RM.RetailerMagmnTableTd>순번</RM.RetailerMagmnTableTd>
            <RM.RetailerMagmnTableTd>이름</RM.RetailerMagmnTableTd>
            <RM.RetailerMagmnTableTd>가게명</RM.RetailerMagmnTableTd>
            <RM.RetailerMagmnTableTd>주소</RM.RetailerMagmnTableTd>
            <RM.RetailerMagmnTableTd>전화번호</RM.RetailerMagmnTableTd>
            <RM.RetailerMagmnTableTd>은행</RM.RetailerMagmnTableTd>
            <RM.RetailerMagmnTableTd>계좌번호</RM.RetailerMagmnTableTd>
            <RM.RetailerMagmnTableTd>가입일</RM.RetailerMagmnTableTd>
            <RM.RetailerMagmnTableTd>최근 접속일</RM.RetailerMagmnTableTd>
            <RM.RetailerMagmnTableTd colSpan="2">비고</RM.RetailerMagmnTableTd>
          </tr>
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
        <RM.RetailerMagmnTableTd>{data.idx}</RM.RetailerMagmnTableTd>
        <RM.RetailerMagmnTableTd>{data.name}</RM.RetailerMagmnTableTd>
        <RM.RetailerMagmnTableTd>{data.company}</RM.RetailerMagmnTableTd>
        <RM.RetailerMagmnTableTd>{data.address}</RM.RetailerMagmnTableTd>
        <RM.RetailerMagmnTableTd>{data.phone}</RM.RetailerMagmnTableTd>
        <RM.RetailerMagmnTableTd>{data.bank}</RM.RetailerMagmnTableTd>
        <RM.RetailerMagmnTableTd>{data.accountNumber}</RM.RetailerMagmnTableTd>
        <RM.RetailerMagmnTableTd>{data.joinDate}</RM.RetailerMagmnTableTd>
        <RM.RetailerMagmnTableTd>{data.endDate}</RM.RetailerMagmnTableTd>
        <RM.RetailerMagmnTableTd>
          <button onClick={handleEditClick}>수정</button>
          <button onClick={handleDeleteClick}>삭제</button>
        </RM.RetailerMagmnTableTd>
      </RM.RetailerMagmnTableTr>
    </tbody>
  );
}

export default RetailerMngmn;
