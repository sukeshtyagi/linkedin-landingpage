import React from "react";
import { useNavigate } from "react-router-dom";

function CareerInfoDiv() {
  const navigate = useNavigate();
  return (
    <div className="outerDiv box-border w-full bg-infodiv text-white p-2">
      <div className="infoDIv box-border flex flex-col items-center justify-center my-16">
        <div className="topDiv box-border flex flex-col items-center justify-center gap-0">
          <h1 className="heading  text-3xl font-normal tracking-wide p-2">
            Grow professionally with Premium Career
          </h1>
          <p className="topDivPara text-gray-400 text-2xl tracking-wide  ">
            Try it for free.Cancel at any time.
          </p>
          <button
            className="button bg-white px-5 py-1 mt-8 rounded text-infodiv text-xl"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Try Premium Career
          </button>
        </div>
        <p className="line1 box-border mt-16 my-12">
          <span>*</span>Free trial eligibility determined on log-in.
        </p>
        <p className="para box-border w-3/4 text-justify">
          {" "}
          <span>*</span>
          After your promotional period,you automatically will be charged for a
          subscription fee on monthly or yearly basis(at your choice) unless you{" "}
          <span>cancel.Learn more.</span>Monthly Inmail credits expire after 90
          days.For who's viewed your profile first and last name may not be
          listed for profile viewers who have chosen to remain semi- or
          fully-anonymous via therir privacy settings.Certain browsing and
          search restriction apply if an unusually high number of queries are
          executed in a short time period, in order to prevent system abuse.
        </p>
      </div>
    </div>
  );
}

export default CareerInfoDiv;
