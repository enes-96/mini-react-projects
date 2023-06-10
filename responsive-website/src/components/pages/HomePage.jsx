import React from "react";
import HeroSection from "../home/HeroSection";
import HeroFeatures from "../home/HeroFeatures";
import TestimonialSection from "../home/TestimonialSection";
import FaqSection from "../home/FaqSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HeroFeatures />
      <TestimonialSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
