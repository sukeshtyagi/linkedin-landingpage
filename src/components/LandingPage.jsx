import React, { useState } from "react";
import Footer from "./landingPageChildCompoents/Footer";
import Header from "./landingPageChildCompoents/Header";
import Hero from "./landingPageChildCompoents/Hero";
import MainSection from "./landingPageChildCompoents/MainSection";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [smallScreen, setSmallScreen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="landingPageContainer box-border w-screen h-fit overflow-y-auto overflow-x-hidden">
      <Header smallScreen={smallScreen} setSmallScreen={setSmallScreen} />
      {!smallScreen && (
        <>
          <Hero />
          <MainSection />
          <Footer />
        </>
      )}

      {smallScreen && (
        <div className="smallScreenDiv box-border border-t-2 border-purple-500 bg-gray-200 h-screen flex justify-center">
          <button
            className="headerButton box-border w-7/12 sm:w-1/4 h-12 px-2 mt-6 bg-white border rounded border-blue-500	border-2 text-blue-500 font-medium"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Start my free trial
          </button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
