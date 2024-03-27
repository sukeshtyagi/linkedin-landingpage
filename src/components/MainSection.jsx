import React, { useState } from "react";
import MainSectionChild from "./MainSectionChild";
import CareerInfoDiv from "./CareerInfoDiv";
import IconChildInfo from "./IconChildInfo";

function MainSection() {
  const [careerSelected, setCareerSelected] = useState(true);
  const [businessSelected, setBusinessSelected] = useState(false);

  const handleCareerClick = () => {
    setCareerSelected(true);
    setBusinessSelected(false);
  };

  const handleBusinessClick = () => {
    setCareerSelected(false);
    setBusinessSelected(true);
  };

  return (
    <div className="outerDiv box-border h-auto ">
      <div className="topDiv box-border h-auto flex items-center justify-center gap-5 pt-2 text-lg mx-10 mt-5 border-b-2 border-gray-400">
        <button
          className={`careerButton box-border ${
            careerSelected ? "text-blue-500 border-b-blue-500 border-b-2" : ""
          }`}
          onClick={handleCareerClick}
        >
          Premium Career
        </button>

        <button
          className={`businessButton box-border ${
            businessSelected ? "text-blue-500 border-b-blue-500 border-b-2" : ""
          }`}
          onClick={handleBusinessClick}
        >
          Premium Business
        </button>
      </div>

      <div className="midDiv box-border h-auto px-0 overflow-x-hidden overflow-y-auto">
        {careerSelected && (
          <h1 className="heading box-border w-3/5 m-auto text-center my-20 text-4xl leading-loose text-black font-normal tracking-wider">
            Grow professionally with Premium Career
          </h1>
        )}

        {businessSelected && (
          <h1 className="heading box-border w-3/5 m-auto text-center my-20 text-4xl leading-loose text-black font-normal tracking-wider">
            Get more clients with Premium Business
          </h1>
        )}

        <div className="segregationDiv box-border w-1/12 h-3 rounded-xl border-yellow-700 mx-auto bg-yellow-700"></div>

        <div className="childContainer box-border flex justify-evenly items-center mt-20 mb-28">
          {careerSelected && (
            <>
              <MainSectionChild parent="On-Demand Learning" />
              <MainSectionChild parent="Monthly Inmail" />
              <MainSectionChild parent="Who's Viewed Your Profile" />
              <MainSectionChild parent="Applicant Insights" />
            </>
          )}
        </div>
        <div className="childContainer box-border">
          {careerSelected && (
            <>
              <IconChildInfo
                name="On-Demand Learning"
                heading="Sharpen Your Skills"
                para="Access over 16,000 expert-led LinkedIn learning courses to hone your skills or learn something new."
              />
              <IconChildInfo
                name="Monthly Inmail"
                heading="Make new connections"
                para="React out to hiring managers and recruiters via Inmail to indicate interest in an open role.Inmail is 3.1x more effective than email alone."
              />
              <IconChildInfo
                name="Who's Viewed Your Profile"
                heading="Your profile is gaining traction"
                para="Find out whether a hiring manager or recruiter has viewed your profile."
              />
              <IconChildInfo
                name="Applicant Insights"
                heading="Find a job that fits"
                para="Get directed to open roles where you'd be a fit based on your skills,past experience, salary requirements and education."
              />
            </>
          )}
        </div>
        {careerSelected && <CareerInfoDiv />}
      </div>
    </div>
  );
}

export default MainSection;
