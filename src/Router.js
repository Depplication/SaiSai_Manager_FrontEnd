import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RetailerMngmnPage from "./pages/MemberMngmn/RetailerMngmn";
import UserMngmnPage from "./pages/MemberMngmn/UserMngmn";

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
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
