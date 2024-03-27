import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import MainSection from "./MainSection";

function LandingPage() {
  return (
    <div className="landingPageContainer box-border w-screen h-fit overflow-y-auto overflow-x-hidden">
      <Header />
      <Hero />
      <MainSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
