import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/Login/Login";
import LoginPage from "./pages/Login/LoginPage";
import PointHistoryPage from "./pages/PointHistory/PointHistory";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>hihi</h1>} />
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/pointHistory" element={<PointHistoryPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
