import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/Login/Login";
import LoginPage from "./pages/Login/LoginPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>hihi</h1>} />
        <Route exact path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
