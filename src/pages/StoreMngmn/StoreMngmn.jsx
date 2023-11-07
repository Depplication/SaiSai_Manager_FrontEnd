import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as SM from "../../styles/StoreMngmn/StoreMngmn";
import { StoreList } from "../../constant/storelist";

function StoreMngmn() {
  const navigate = useNavigate();

  const [dataFromServer, setDataFromServer] = useState(StoreList);

  const handleDelete = (idx) => {
    setDataFromServer((prevData) =>
      prevData.filter((item) => item.idx !== idx)
    );
  };

  useEffect(() => {
    console.log(dataFromServer);
  }, [dataFromServer]);

  return (
    <div>
      <div>
        <div>
          <div>
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td>대표자명</td>
                  <td>가게명</td>
                  <td>전화번호</td>
                  <td>주소</td>
                  <td>사업자등록번호</td>
                  <td colSpan="2">비고</td>
                </tr>
              </thead>

              {dataFromServer.map((data) => (
                <Table key={data.idx} data={data} onDelete={handleDelete} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function Table({ data, onDelete }) {
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    onDelete(data.idx);
  };

  return (
    <tbody>
      <tr>
        <td>{data.idx}</td>
        <td>{data.name}</td>
        <td>{data.storeName}</td>
        <td>{data.storePhone}</td>
        <td>{data.address}</td>
        <td>{data.BusinessRegistrationNumber}</td>
        <td>
          <span onClick={() => navigate(`/storemngmnedit/${data.storeName}`)}>
            수정
          </span>
          <sapn onClick={handleDeleteClick}>삭제</sapn>
        </td>
      </tr>
    </tbody>
  );
}

export default StoreMngmn;
