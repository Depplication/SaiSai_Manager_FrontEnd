import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import PointHistoryPage from "./pages/PointHistory/PointHistoryPage";
import PaymentHistoryPage from "./pages/PaymentHistory/PaymentHistoryPage";
import Header from "./components/header/header";
import RetailerMngmnPage from "./pages/MemberMngmn/RetailerMngmn";
import UserMngmnPage from "./pages/MemberMngmn/UserMngmn";
import RetailerInfoEditPage from "./pages/MemberMngmn/RetailerMemberInfoEdit";
import UserInfoEditPage from "./pages/MemberMngmn/UserMemberInfoEdit";
import StoreMngmnPage from "./pages/StoreMngmn/StoreMngmn";
import StoreMngmnEditPage from "./pages/StoreMngmn/StoreMngmnEdit";

function Router() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<h1>hihi</h1>} />
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route
          exact
          path="/pointhistory"
          element={<PointHistoryPage />}
        ></Route>
        <Route
          exact
          path="/paymenthistory"
          element={<PaymentHistoryPage />}
        ></Route>
        <Route
          exact
          path="/retailermngmn"
          element={<RetailerMngmnPage />}
        ></Route>
        <Route
          exact
          path="/retailerinfoedit/:id"
          element={<RetailerInfoEditPage />}
        ></Route>
        <Route exact path="/usermngmn" element={<UserMngmnPage />}></Route>
        <Route
          exact
          path="/userinfoedit/:id"
          element={<UserInfoEditPage />}
        ></Route>
        <Route exact path="/storemngmn" element={<StoreMngmnPage />}></Route>
        <Route
          exact
          path="/storemngmnedit/:storeName"
          element={<StoreMngmnEditPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
