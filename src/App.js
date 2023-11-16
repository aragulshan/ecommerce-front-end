import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import StorePage from "./pages/storepage/StorePage";
import Member from "./pages/member/Member";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <Router>
      {/* <Header /> */}
      {auth.isAuthenticated && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            auth.isAuthenticated ? (
              auth.role === "admin" ? (
                // <Dashboard />
                <Navigate to="/dashboard" />
              ) : (
                <Home />
              )
            ) : (
              <Navigate to="/member" />
            )
          }
        />
        <Route path="/member" element={<Member />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <Footer /> */}
      {auth.isAuthenticated && <Footer />}
    </Router>
    //  <Router>
    //   <Routes>
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/member" element={<Member />} />
    //     <Route path="/" element={<Home />} />
    //     <Route path="/store" element={<StorePage/>} />
    //   </Routes>
    //   {/* <Footer/> */}
    // </Router>
  );
};

export default App;
