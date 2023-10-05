import React, { useState } from "react";
import * as UM from "../../styles/MemberMngmn/UserMngmn.style";
import { useNavigate } from "react-router-dom";
import UserMemberInfoEdit from "./UserMemberInfoEdit";

function UserMngmn() {
  const navigate = useNavigate();

  const [dataFromServer, setDataFromServer] = useState([
    {
      idx: 1,
      id: "username",
      password: "password",
      email: "saisai@naver.com",
      name: "김민성",
      address: "대구광역시 창리로",
      phone: "010-0000-0000",
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
    <>
      <div onClick={() => navigate("/retailermngmn")}>업주</div>
      <div onClick={() => navigate("/usermngmn")}>주민</div>
      <div>
        <input type="search"></input>
        <img></img>
      </div>
      <div>정렬</div>
      <div>필터</div>
      <table>
        <thead>
          <tr>
            <td>순번</td>
            <td>이름</td>
            <td>최근 접속일</td>
            <td colSpan="2">비고</td>
          </tr>
        </thead>

        {dataFromServer.map((data) => (
          <Table
            key={data.idx}
            data={data}
            onDelete={handleDelete}
            onEdit={handleEditClick}
          />
        ))}
      </table>
    </>
  );
}

function Table({ data, onDelete, onEdit }) {
  const handleDeleteClick = () => {
    onDelete(data.idx);
  };

  const handleEditClick = () => {
    onEdit(data);
  };

  return (
    <tbody>
      <tr>
        <td>{data.idx}</td>
        <td>{data.name}</td>
        <td>{data.company}</td>
        <td>{data.address}</td>
        <td>{data.phone}</td>
        <td>
          <button onClick={handleEditClick}>수정</button>
          <button onClick={handleDeleteClick}>삭제</button>
        </td>
      </tr>
    </tbody>
  );
}

export default UserMngmn;
