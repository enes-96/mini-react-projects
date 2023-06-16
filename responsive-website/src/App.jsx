import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PricingPage from "./components/pages/PricingPage";
import FeaturesPage from "./components/pages/FeaturesPage";
import ContactPage from "./components/pages/ContactPage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignUpPage";
import Navbar from "./components/common/Navbar";
import AboutUs from "./components/pages/AboutUsPage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="max-w-screen-2xl  mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
