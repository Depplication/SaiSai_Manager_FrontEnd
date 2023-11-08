import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as SME from "../../styles/StoreMngmn/StoreMngmnEdit";
import { StoreList } from "../../constant/storelist";

function StoreMngmnEdit() {
  const navigate = useNavigate();

  const { storeName } = useParams();

  const storeInfo = StoreList.find((store) => storeName === store.storeName);

  return (
    <div>
      <div>
        <div>
          <div>가게 수정</div>
          <div>
            <button onClick={() => navigate("/storemngmn")}>취소</button>
            <button>수정</button>
          </div>
        </div>
        <div>
          <label>대표자명</label>
          <input type="text" placeholder={storeInfo.name}></input>
        </div>
        <div>
          <label>가게 소개</label>
          <input type="text" placeholder={storeInfo.storeIntroduction}></input>
        </div>
        <div>
          <label>사업자 등록번호</label>
          <input
            type="text"
            placeholder={storeInfo.BusinessRegistrationNumber}
          ></input>
        </div>
        <div>가게 사진</div>
        <div>
          <label>가게명</label>
          <input type="text" placeholder={storeInfo.storeName}></input>
        </div>
        <div>가게 사진</div>
        <div>
          <label>주소</label>
          <input type="text" placeholder={storeInfo.address}></input>
          <input type="text" placeholder={storeInfo.detailAddress}></input>
        </div>
        <div>가게 상품</div>
      </div>
    </div>
  );
}

export default StoreMngmnEdit;
