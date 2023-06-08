import React from "react";
import { Link } from "react-router-dom";
import logo from "/home/enes10/Desktop/mini-react-projects/responsive-website/src/assets/images/LynxNet.png";

const Navbar = () => {
  return (
    <nav className="">
      <div className=" max-w-screen-2xl mx-auto px-6">
        <div className="flex items-center justify-between py-4 ">
          <div className=" flex w-full justify-between">
            <div className=" ">
              <Link to="/" className="text-white font-bold text-xl">
                <img src={logo} className=" h-16" />
              </Link>
            </div>
            <ul className="flex items-center gap-12 ">
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
              <Link
                to="/aboutus"
                className="transition-all duration-300 text-gray-300 hover:text-red-200 font-medium text-lg"
              >
                About Us
              </Link>
            </ul>
            <div className="flex items-center gap-12 ">
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
    </nav>
  );
};

export default Navbar;
