import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";

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
