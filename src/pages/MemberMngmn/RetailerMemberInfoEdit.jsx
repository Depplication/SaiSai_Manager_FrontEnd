import React, { useState } from "react";

function RetailerMemberInfoEdit({ data, onClose }) {
  const [editData, setEditedData] = useState(data);

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setEditedData((prevData) => ({
      ...prevData, //spread 연산자, 배열 prevData의 요소들을 복사
      [field]: value,
    }));
  };

  const handleEditClick = () => {
    onClose(editData);
  };

  return (
    <div>
      <button onClick={onClose}>닫기</button>
      <div>
        <div>
          <div>이름</div>
          <input
            value={editData.name}
            onChange={(e) => handleInputChange(e, "name")}
          ></input>
        </div>
        <div>
          <div>주소</div>
          <input
            value={editData.address}
            onChange={(e) => handleInputChange(e, "address")}
          ></input>
        </div>
        <div>
          <div>전화번호</div>
          <input
            value={editData.phone}
            onChange={(e) => handleInputChange(e, "phone")}
          ></input>
        </div>
        <div>
          <div>은행</div>
          <input
            value={editData.bank}
            onChange={(e) => handleInputChange(e, "bank")}
          ></input>
        </div>
        <div>
          <div>계좌번호</div>
          <input
            value={editData.accountNumber}
            onChange={(e) => handleInputChange(e, "accountNumber")}
          ></input>
        </div>
        <div>
          <div>가입일</div>
          <input
            value={editData.joinDate}
            onChange={(e) => handleInputChange(e, "joinDate")}
          ></input>
        </div>
        <div>
          <div>최근 접속일</div>
          <input
            value={editData.endDate}
            onChange={(e) => handleInputChange(e, "endDate")}
          ></input>
        </div>
        <div>
          <div>id</div>
          <input
            value={editData.id}
            onChange={(e) => handleInputChange(e, "id")}
          ></input>
        </div>
        <div>
          <div>pw</div>
          <input
            value={editData.password}
            onChange={(e) => handleInputChange(e, "password")}
          ></input>
        </div>
        <button onClick={handleEditClick}>수정</button>
      </div>
    </div>
  );
}

export default RetailerMemberInfoEdit;
