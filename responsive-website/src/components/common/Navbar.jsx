import React from "react";
import { Link } from "react-router-dom";
import logo from "/home/enes10/Desktop/mini-react-projects/responsive-website/src/assets/images/LynxNet.png";

const Navbar = () => {
  return (
    <nav className="">
      <div className=" max-w-screen-2xl mx-auto px-2">
        <div className="flex items-center justify-between py-4 ">
          <div className="">
            <Link to="/" className="text-white font-bold text-xl">
              <img src={logo} className=" h-16" />
            </Link>
          </div>
          <div className="hidden md:block ">
            <div className="flex gap-24 items-center ">
              <div className="flex items-center gap-7">
                <Link
                  to="/"
                  className="transition-all duration-300 text-gray-300 hover:text-red-200 font-medium text-lg"
                >
                  Home
                </Link>
                <Link
                  to="/pricing"
                  className="transition-all duration-300 text-gray-300 hover:text-red-200 font-medium text-lg"
                >
                  Pricing
                </Link>
                <Link
                  to="/features"
                  className="transition-all duration-300 text-gray-300 hover:text-red-200 font-medium text-lg"
                >
                  Features
                </Link>
                <Link
                  to="/contact"
                  className="transition-all duration-300 text-gray-300 hover:text-red-200 font-medium text-lg"
                >
                  Contact
                </Link>
              </div>
              <div className="flex items-center gap-7">
                <Link
                  to="/login"
                  className="transition-all duration-300 text-gray-300 hover:text-red-200 font-medium text-lg"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="transition-all duration-300 text-white  font-medium text-lg px-4 py-1 rounded-md bg-red-800"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
