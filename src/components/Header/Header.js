import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const auth = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setIsSticky(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div className={`${isSticky ? "fixed top-0 w-full z-20" : ""}`}> */}
      {/* <div
        className={`bg-body-tertiary ${
          isSticky ? "fixed top-0 w-full z-20" : ""
        }`}
      >
        <nav className="bg-[#3d3d3d] h-14 p-4 flex items-center justify-between my-auto">
          <div className="container mx-auto flex items-center justify-between">
            <a className="my-auto" href="/">
              <img
                src="./images/Rectangle.png"
                alt="rect"
                className="w-[116px] h-[20px]"
              />
            </a>
            <p className="text-[#F9F9F9] text-sm ml-4">
              Download eHisaab now to maintain your business accounts and get
              online sale orders.
            </p>
          </div>
        </nav>
      </div> */}
      <div
        // className={`bg-[#E7E7E7] `}
        // className={`bg-[#E7E7E7] ${isSticky ? "sticky top-14" : ""}`}
        className={`bg-[#E7E7E7] ${isSticky ? "fixed top-0 w-full z-20" : ""}`}
        style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 1)" }}
      >
        <nav className="">
          <div className="container mx-auto xl:w-[1366px]">
            <div className=" container mx-auto flex flex-row justify-between lg:flex-none ">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full xl:px-[95px]">
                <a href="/">
                  <img
                    src="./images/logoMain.png"
                    alt=""
                    className=" h-[100px]"
                  />
                </a>

                <div
                  className={`${
                    isMenuOpen ? "block" : "hidden"
                  } lg:flex lg:items-center lg:w-auto `}
                >
                  <ul className="lg:flex lg:items-center lg:space-x-5">
                    {auth.isAuthenticated ? (
                    <>
                      <li className="mb-2 lg:mb-0">
                        <Link
                          className="text-[#3E8AAD] font-semibold text-lg"
                          to="/home"
                          // to="/home"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="mb-2 lg:mb-0">
                        <Link
                          className="text-[#3E8AAD] font-semibold text-lg"
                          to="/store"
                        >
                          Stores
                        </Link>
                      </li>
                      <li className="mb-2 lg:mb-0">
                        <Link
                          className="text-[#3E8AAD] font-semibold text-lg"
                          to="/Products"
                        >
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <img
                            src="./images/cart.png"
                            alt=""
                            className="w-5 h-5"
                          />
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="text-[#3E8AAD] font-semibold text-lg"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                     ) : (
                      <li>
                        <Link
                          className="text-[#3E8AAD] font-semibold text-lg"
                          to="/member"
                        >
                          Member
                        </Link>
                      </li>
                    )} 
                  </ul>
                </div>
              </div>

              <button
                className="lg:hidden block text-[#3E8AAD] focus:outline-none"
                onClick={toggleMenu}
              >
                ☰
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* </div> */}
    </>
  );
};

export default Header;
