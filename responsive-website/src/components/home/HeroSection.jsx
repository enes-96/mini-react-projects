import logo from "../../assets/images/lynxhead.png";
import {
  HiOutlineDownload,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from "react-icons/hi";
import {
  HiMiniPlayCircle,
  HiOutlineBars3,
  HiOutlineUser,
} from "react-icons/hi2";
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
          <div
            className="rounded-3xl px-7 pt-14 relative overflow-hidden"
            id="phoneFrame"
          >
            <div className="flex items-center  justify-between text-2xl mt-3 mb-5">
              <HiOutlineBars3 className="" />
              <img src={logo} alt="" className=" h-8" />
              <HiOutlineUser className=" fill-black" />
            </div>
            <p className="text-center my-3 text-2xl text-green-900 font-bold">
              Connected
            </p>
            <p className="text-center ">Tokyo, Japan</p>
            <p className=" mb-5 text-center text-xs">11.240.222.128</p>
            <div className=" bg-neutral-300 h-32  w-16 rounded-xl m-auto my-5 ">
              <div className=" h-16 w-full grid place-items-center bg-neutral-700  rounded-xl">
                <p className="text-green-700 font-bold">ON</p>
              </div>
            </div>
            <div className="flex w-52 mx-auto mt-7 mb-5 items-center justify-between">
              <div className="flex text-xs gap-2">
                <div className="bg-neutral-300 h-8 grid place-items-center w-8 rounded-md text-xl">
                  <HiOutlineChevronDown className="text-green-700 " />
                </div>
                <div>
                  <p>Download</p>
                  <p>34.2 Mbps</p>
                </div>
              </div>
              <div className="flex text-xs gap-2">
                <div className="bg-neutral-300 h-8 grid place-items-center w-8 rounded-md text-xl">
                  <HiOutlineChevronUp className="text-orange-700 " />
                </div>
                <div>
                  <p>Upload</p>
                  <p>19.7 Mbps</p>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-center">Available Servers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
