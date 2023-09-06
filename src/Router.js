import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OwnerMngmnPage from "../src/pages/MemberMngmn/OwnerMngmn";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/membermngmn" element={<OwnerMngmnPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
