import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <div className="hero">
        <div className="hero__title">Chillo, new mindful way</div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
