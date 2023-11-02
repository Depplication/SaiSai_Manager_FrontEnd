import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RetailerMngmnPage from "./pages/MemberMngmn/RetailerMngmn";
import UserMngmnPage from "./pages/MemberMngmn/UserMngmn";
import RetailerEditPage from "./pages/MemberMngmn/RetailerMemberInfoEdit";
import UserEditPage from "./pages/MemberMngmn/UserMemberInfoEdit";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/retailermngmn"
          element={<RetailerMngmnPage />}
        ></Route>
        <Route exact path="/usermngmn" element={<UserMngmnPage />}></Route>
        <Route
          exact
          path="/retaileredit"
          element={<RetailerEditPage />}
        ></Route>
        <Route exact path="/useredit" element={<UserEditPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
