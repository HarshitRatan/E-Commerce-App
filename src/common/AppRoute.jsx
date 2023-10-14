import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Info from "../page/Info";

const AppRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/*" element={<Home />}></Route>
          <Route exact path="/info/:id" element={<Info />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoute;
