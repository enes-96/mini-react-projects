import React from "react";
import HeroSection from "../home/HeroSection";
import HeroFeatures from "../home/HeroFeatures";
import TestimonialSection from "../home/TestimonialSection";
import FaqSection from "../home/FaqSection";

const HomePage = () => {
  return (
    <div className="bg-red-400 max-w-screen-2xl mx-auto">
      <HeroSection />
      <HeroFeatures />
      <TestimonialSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
