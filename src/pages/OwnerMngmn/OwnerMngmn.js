import React from "react";
import * as O from "../../styles/OwnerMngmn/OwnerMngmn.style";

function OwnerMngmn() {
  return (
    <O.OwnerMngmnLayOut>
      <div>
        <input></input>
        <img></img>
      </div>

      <div>정렬</div>
      <div>필터</div>
      <O.OwnerMagmnTable>
        <O.OwnerMagmnTableTr>
          <O.OwnerMagmnTableTd>1</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>김민성</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>사이사이</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>대구광역시 창리로</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>010-0000-0000</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>대구은행</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>123-123456-12</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>2023/00/00</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>2023/00/00</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>수정</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>삭제</O.OwnerMagmnTableTd>
        </O.OwnerMagmnTableTr>
      </O.OwnerMagmnTable>
      <O.OwnerMagmnTable>
        <O.OwnerMagmnTableTr>
          <O.OwnerMagmnTableTd>순번</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>이름</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>가게명</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>주소</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>전화번호</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>은행</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>계좌번호</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>가입일</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>최근접속일</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>수정</O.OwnerMagmnTableTd>
          <O.OwnerMagmnTableTd>삭제</O.OwnerMagmnTableTd>
        </O.OwnerMagmnTableTr>
      </O.OwnerMagmnTable>
    </O.OwnerMngmnLayOut>
  );
}

export default OwnerMngmn;
