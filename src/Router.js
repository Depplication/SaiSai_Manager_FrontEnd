import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OwnerMngmnPage from "../src/pages/OwnerMngmn/OwnerMngmn";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/ownermngmn" element={<OwnerMngmnPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
