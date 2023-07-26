import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="relative z-50">
      <div className="absolut top-0 left-0 right-0 text-white">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="text-2xl font-bold text-black">LOGO</div>
          <div
            className="ml-4 block cursor-pointer text-4xl text-black"
            onClick={handleOpenNav}
          >
            {isOpen ? "X" : "+"}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 overflow-y-scroll bg-white z-50">
          <div className="flex justify-between px-10 py-4 mb-40">
            <div className="text-2xl font-bold">LOGO</div>
            <div
              className="ml-4 block cursor-pointer text-4xl"
              onClick={handleOpenNav}
            >
              {isOpen ? "X" : "+"}
            </div>
          </div>
          <div className="text-center">
            <Link to="/" onClick={handleLinkClick}>
              <div className="py-4">
                <li className="block px-6 py-2 font-semibold uppercase hover:text-blue-900">
                  Home
                </li>
              </div>
            </Link>
            <Link to="/sideslider" onClick={handleLinkClick}>
              <div className="py-4">
                <li className="block px-6 py-2 font-semibold uppercase hover:text-blue-900">
                  Sideslider
                </li>
              </div>
            </Link>
            <Link to={"/page"} onClick={handleLinkClick}>
              <div className="py-4">
                <li className="block px-6 py-2 font-semibold uppercase hover:text-blue-900">
                  LandingPage
                </li>
              </div>
            </Link>
            <Link to={"/login"} onClick={handleLinkClick}>
              <div className="py-4">
                <li className="block px-6 py-2 font-semibold uppercase hover:text-blue-900">
                  Login
                </li>
              </div>
            </Link>
            <Link to={"/parallax"} onClick={handleLinkClick}>
              <div className="py-4">
                <li className="block px-6 py-2 font-semibold uppercase hover:text-blue-900">
                  Parallax
                </li>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
