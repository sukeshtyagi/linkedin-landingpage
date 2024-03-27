import React from "react";
import Footer from "./landingPageChildCompoents/Footer";
import Header from "./landingPageChildCompoents/Header";
import Hero from "./landingPageChildCompoents/Hero";
import MainSection from "./landingPageChildCompoents/MainSection";

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
