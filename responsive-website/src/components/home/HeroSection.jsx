import React from "react";
import ipohneImg from "../../assets/images/ipohne.png";

const HeroSection = () => {
  return (
    <div className="border-2 ">
      <div className="flex justify-between min-h-screen py-10 ">
        <div className="">
          <h1 className=" text-5xl">Unleash Online Freedom with Lynx</h1>
        </div>
        <div className="w-1/2 grid place-items-center">
          <div className="w-80">
            <img src={ipohneImg} className=" w-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
