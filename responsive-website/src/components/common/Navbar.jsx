import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/lynxhead.png";

const Navbar = () => {
  return (
    <nav className="">
      <div className=" max-w-screen-2xl mx-auto px-6 ">
        <div className="flex items-center justify-between py-4 ">
          <div className=" flex w-full justify-between ">
            <div className=" w-1/3">
              <Link to="/" className="">
                <img src={logo} className=" h-16" />
              </Link>
            </div>
            <ul className="flex items-center  w-1/3">
              <Link
                to="/"
                className="transition-all duration-300 text-lg px-4 py-1 hover:bg-slate-100 rounded-lg"
              >
                Home
              </Link>
              <Link
                to="/pricing"
                className="transition-all duration-300 hover:bg-slate-100 rounded-lg px-4 py-1 text-lg"
              >
                Pricing
              </Link>
              <Link
                to="/features"
                className="transition-all duration-300 text-lg px-4 py-1 hover:bg-slate-100 rounded-lg"
              >
                Features
              </Link>
              <Link
                to="/contact"
                className="transition-all duration-300 text-lg px-4 py-1 hover:bg-slate-100 rounded-lg"
              >
                Contact
              </Link>
              <Link
                to="/aboutus"
                className="transition-all duration-300 text-lg  px-4 py-1 hover:bg-slate-100 rounded-lg"
              >
                About Us
              </Link>
            </ul>
            <div className="flex justify-end items-center gap-12 w-1/3">
              <Link
                to="/login"
                className="transition-all duration-300  text-lg px-4 py-1 hover:bg-slate-100 rounded-lg "
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="transition-all duration-300 text-lg px-4 py-1 rounded-md bg-slate-800 text-white"
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
