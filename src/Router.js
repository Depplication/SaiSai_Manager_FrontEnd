import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RetailerMngmnPage from "./pages/MemberMngmn/RetailerMngmn";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/retailermngmn"
          element={<RetailerMngmnPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
