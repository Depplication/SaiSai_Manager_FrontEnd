import React, { useState } from "react";
import * as O from "../../styles/MemberMngmn/OwnerMngmn.style";
import { useNavigate } from "react-router-dom";
import OwnerMemberInfoEdit from "./OwnerMemberInfoEdit";

function OwnerMngmn() {
  const navigate = useNavigate();

  const [dataFromServer, setDataFromServer] = useState([
    {
      id: 1,
      name: "김민성",
      company: "사이사이",
      address: "대구광역시 창리로",
      phone: "010-0000-0000",
      bank: "대구은행",
      account: "123-123456-12",
      startDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      id: 2,
      name: "임규연",
      company: "사이사이",
      address: "대구광역시 창리로",
      phone: "010-1234-1234",
      bank: "농협은행",
      account: "023-152468-42",
      startDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      id: 3,
      name: "문주호",
      company: "사이사이",
      address: "대구광역시 창리로",
      phone: "010-5644-1567",
      bank: "신한은행",
      account: "356-741581-72",
      startDate: "2023/00/00",
      endDate: "2023/00/00",
    },
    {
      id: 4,
      name: "조가연",
      company: "사이사이",
      address: "대구광역시 창리로",
      phone: "010-6457-7894",
      bank: "신한은행",
      account: "356-123456-72",
      startDate: "2023/00/00",
      endDate: "2023/00/00",
    },
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleEditClick = (data) => {
    setSelectedData(data);
    setIsPopupOpen(true);
  };

  const handleDelete = (id) => {
    setDataFromServer((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleEditSubmit = (editData) => {
    setDataFromServer((prevData) => {
      return prevData.map((item) =>
        item.id === editData.id ? editData : item
      );
    });

    setIsPopupOpen(false);
  };

  return (
    <O.OwnerMngmnLayOut>
      <div onClick={() => navigate("/ownermngmn")}>업주</div>
      <div onClick={() => navigate("/")}>주민</div>
      <div>
        <input></input>
        <img></img>
      </div>

      <div>정렬</div>
      <div>필터</div>
      <O.OwnerMagmnTable>
        {dataFromServer.map((data) => (
          <OwnmnTable
            key={data.id}
            data={data}
            onDelete={handleDelete}
            onEdit={handleEditClick}
          />
        ))}
      </O.OwnerMagmnTable>
      {isPopupOpen && (
        <OwnerMemberInfoEdit data={selectedData} onClose={handleEditSubmit} />
      )}
    </O.OwnerMngmnLayOut>
  );
}

function OwnmnTable({ data, onDelete, onEdit }) {
  const handleDeleteClick = () => {
    onDelete(data.id);
  };

  const handleEditClick = () => {
    onEdit(data);
  };

  return (
    <O.OwnerMagmnTableTr>
      <O.OwnerMagmnTableTd>{data.id}</O.OwnerMagmnTableTd>
      <O.OwnerMagmnTableTd>{data.name}</O.OwnerMagmnTableTd>
      <O.OwnerMagmnTableTd>{data.company}</O.OwnerMagmnTableTd>
      <O.OwnerMagmnTableTd>{data.address}</O.OwnerMagmnTableTd>
      <O.OwnerMagmnTableTd>{data.phone}</O.OwnerMagmnTableTd>
      <O.OwnerMagmnTableTd>{data.bank}</O.OwnerMagmnTableTd>
      <O.OwnerMagmnTableTd>{data.account}</O.OwnerMagmnTableTd>
      <O.OwnerMagmnTableTd>{data.startDate}</O.OwnerMagmnTableTd>
      <O.OwnerMagmnTableTd>{data.endDate}</O.OwnerMagmnTableTd>
      <O.OwnerMagmnTableTd>
        <button onClick={handleEditClick}>수정</button>
        <button onClick={handleDeleteClick}>삭제</button>
      </O.OwnerMagmnTableTd>
    </O.OwnerMagmnTableTr>
  );
}

export default OwnerMngmn;
