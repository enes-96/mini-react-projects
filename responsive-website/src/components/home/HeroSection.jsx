import React from "react";
import ipohneImg from "../../assets/images/ipohne.png";
import { HiOutlineDownload } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2  min-h-screen py-10 ">
        <div className="">
          <h1 className=" text-5xl mt-20 text-center">
            Unleash Online Freedom with Lynx
          </h1>
          <p className="w-3/4 text-xl my-4 leading-relaxed">
            Enjoy the full functionality of LynxVPN for 30 days without any
            obligation! Choose any plan and try the best VPN now - completely
            risk-free. Not completely satisfied? Cancel at any time within the
            first 30 days and get your money back. And completely.
          </p>
          <div className="bg-black text-white flex items-center w-min p-4  rounded-xl gap-2 text-lg">
            <HiOutlineDownload />
            <p>download</p>
          </div>
        </div>
        <div className="w-1/2 grid place-items-center place-self-center ">
          <div className="w-80">
            <img src={ipohneImg} className=" w-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
