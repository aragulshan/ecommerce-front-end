import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Member from "./pages/member/Member";
import Header from "./components/Header/Header";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/member" element={<Member />} />
        <Route path="/home" element={<Home />} />
      
      </Routes>
    </Router>
  );
};



export default App;

