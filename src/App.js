import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Member from "./pages/member/Member";

const App = (props) => {
 
  return (
    <Router>
      <Routes>
        <Route path="/member" element={<Member />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
