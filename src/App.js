import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import StorePage from "./pages/storepage/StorePage";
import Member from "./pages/member/Member";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";

const App = (props) => {
  const auth = useSelector((state) => state.auth);

  return (
    <Router>
      {auth.isAuthenticated && <Header />}
      <Routes>
        <Route path="/member" element={<Member />} />
        <Route
          path="/"
          element={auth.isAuthenticated ? <Home /> : <Navigate to="/member" />}
        />
        <Route
          path="/store"
          element={
            auth.isAuthenticated ? <StorePage /> : <Navigate to="/member" />
          }
        />
      </Routes>
      {auth.isAuthenticated && <Footer />}
    </Router>
    //  <Router>
    //   <Routes>
    //     <Route path="/member" element={<Member />} />
    //     <Route path="/" element={<Home />} />
    //     <Route path="/store" element={<StorePage/>} />
    //   </Routes>
    //   <Footer/>
    // </Router>
   
  );
};

export default App;
