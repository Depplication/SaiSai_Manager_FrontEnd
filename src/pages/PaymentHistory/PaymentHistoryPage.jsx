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
    </div>
  );
}

export default PaymentHistory;
