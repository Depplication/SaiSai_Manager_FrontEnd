import * as L from "../../styles/Payment/PaymentHistory";

function PaymentHistory() {
  return (
    <div>
      <L.pointHistoryBox>
        <pointHistory>포인트 내역</pointHistory>
      </L.pointHistoryBox>
      <L.couponHistoryBox>
        <L.couponHistory>쿠폰 내역</L.couponHistory>
      </L.couponHistoryBox>

      <L.num>순번</L.num>
      <L.representative>대표자 명</L.representative>
      <L.store>가게 명</L.store>
      <L.phoneNum>전화번호</L.phoneNum>
      <L.amount>결제 금액</L.amount>
      <L.bank>은행</L.bank>
      <L.accountNum>계좌번호</L.accountNum>
      <L.paymentDate>결제일</L.paymentDate>

      
    </div>
  );
}

export default PaymentHistory;
