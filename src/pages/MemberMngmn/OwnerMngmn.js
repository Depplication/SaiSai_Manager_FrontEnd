import React from "react";
import * as O from "../../styles/MemberMngmn/OwnerMngmn.style";
import { Navigate, useNavigate } from "react-router-dom";

function OwnerMngmn() {
  const navigate = useNavigate();

  const dataFromServer = [
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
  ];

  return (
    <O.OwnerMngmnLayOut>
      <div onClick={() => Navigate("/")}>주민</div>
      <div>
        <input></input>
        <img></img>
      </div>

      <div>정렬</div>
      <div>필터</div>
      <O.OwnerMagmnTable>
        {dataFromServer.map((data) => (
          <OwnmnTable key={data.id} data={data} />
        ))}
      </O.OwnerMagmnTable>
    </O.OwnerMngmnLayOut>
  );
}

function OwnmnTable({ data }) {
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
      <O.OwnerMagmnTableTd>수정</O.OwnerMagmnTableTd>
      <O.OwnerMagmnTableTd>삭제</O.OwnerMagmnTableTd>
    </O.OwnerMagmnTableTr>
  );
}

export default OwnerMngmn;
