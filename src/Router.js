import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
