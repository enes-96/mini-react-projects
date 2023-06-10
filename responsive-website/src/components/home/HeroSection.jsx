import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

import {
  SiBmw,
  SiSteam,
  SiSpotify,
  SiPorsche,
  SiPremierleague,
  SiIbm,
  SiApple,
  SiLinkedin,
  SiUps,
} from "react-icons/si";

const HeroSection = () => {
  return (
    <section className="max-w-screen-2xl m-auto">
      <h1
        id="hero-header"
        className="text-9xl text-center font-bold tracking-wide text-white  my-8"
      >
        Anonymize Your <br /> Digital Footprints.
      </h1>
      <h6 className="text-center text-2xl text-neutral-700 mt-5 mb-10">
        Unchain Your Digital Freedom. Enter a World of Secure Surfing. <br />{" "}
        LynxNet allows you to connect to 4 continents in free Plan <br />
      </h6>

      <div className="w-full flex justify-center ">
        <Link
          to="/signup"
          className="bg-red-700 py-2 px-6 rounded-md flex items-center w-fit gap-3 hover:bg-red-800 transition-all duration-300"
        >
          <Button className={"text-2xl "}>Try LynxNet</Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
      <p className="text-center mt-5 text-sm text-neutral-500 mb-10">
        30-DAY MONEY BACK GUARANTEE
      </p>
      <div className="w-full h-32 my-12 flex items-center justify-between border-t-2 border-b-2 border-white p-20">
        <SiBmw className="text-8xl text-neutral-700" />
        <SiSteam className="text-8xl text-neutral-700" />
        <SiSpotify className="text-8xl text-neutral-700" />
        <SiPorsche className="text-8xl text-neutral-700" />
        <SiPremierleague className="text-8xl text-neutral-700" />
        <SiIbm className="text-8xl text-neutral-700" />
        <SiApple className="text-8xl text-neutral-700" />
        <SiLinkedin className="text-8xl text-neutral-700" />
        <SiUps className="text-8xl text-neutral-700" />
      </div>
    </section>
  );
};

export default HeroSection;
