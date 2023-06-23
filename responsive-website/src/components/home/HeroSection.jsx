import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import {
  HiMiniPlayCircle,
  HiOutlineBars3,
  HiOutlineUser,
} from "react-icons/hi2";
import logo from "../../assets/images/lynxhead.png";

import {
  SiBbc,
  SiSony,
  SiMclaren,
  SiKaspersky,
  SiSandisk,
  SiSamsung,
  SiAirbus,
  SiAmd,
} from "react-icons/si";

const HeroSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2  min-h-screen py-10 ">
        <div className="">
          <h1 className=" text-5xl mt-20 mb-6">
            Unleash Online Freedom with Lynx
          </h1>
          <p className="w-3/4 text-xl my-6 leading-relaxed">
            Enjoy the full functionality of LynxVPN for 30 days without any
            obligation! Choose any plan and try the best VPN now - completely
            risk-free. Not completely satisfied? Cancel at any time within the
            first 30 days and get your money back. And completely.
          </p>
          <div className="flex gap-6 my-6">
            <div className="bg-black text-white flex items-center w-36 p-3  rounded-xl gap-2 text-lg cursor-pointer">
              <HiOutlineDownload className="text-2xl" />
              <p>download</p>
            </div>{" "}
            <div className="border-2 text-neutral-700 flex items-center w-52 p-3  rounded-xl gap-2 text-lg cursor-pointer">
              <HiMiniPlayCircle className="text-2xl" />
              <p>Watch the video</p>
            </div>
          </div>
          <div>
            <h4 className=" font-bold mt-14">As featured In </h4>
            <div className="text-9xl grid grid-cols-4 h-72 overflow-hidden">
              <SiBbc />
              <SiSony />
              <SiMclaren />
              <SiKaspersky />
              <SiSandisk />
              <SiSamsung />
              <SiAirbus />
              <SiAmd />
            </div>
          </div>
        </div>
        <div className="w-1/2 grid place-items-center place-self-center ">
          <div className="rounded-3xl px-7 pt-14" id="phoneFrame">
            <div className="flex items-center  justify-between text-2xl my-2">
              <HiOutlineBars3 className="" />
              <img src={logo} alt="" className=" h-8" />
              <HiOutlineUser className=" fill-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
