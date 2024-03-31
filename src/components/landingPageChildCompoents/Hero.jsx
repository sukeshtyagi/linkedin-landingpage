import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero box-border w-full h-full overflow-hidden border-t-4 border-blue-400 relative">
      <img src="/images/h8.jpg" alt="" className="box-border w-full h-96" />

      <div className="overlayDiv box-border w-full h-full absolute top-0 left-0 flex flex-col items-start justify-between gap-20  ">
        <div className="topDiv box-border w-fit flex flex-col items-start  justify-start gap-3 mt-0  ml-1 text-base sm:mx-auto sm:text-xl">
          <p className="upper box-border w-3/4 text-black  p-2">
            Discover how premium can help you
          </p>
          <button
            className="lower text-white font-normal bg-blue-900 px-5 py-1 rounded"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Upgrade for 1 month
          </button>
        </div>

        <div className="bottomDiv box-border w-fit flex flex-col justify-center items-start gap-4 mb-2 ml-1 text-base sm:mx-auto sm:text-xl">
          <p className="upr text-black w-3/4  bg-green-500 rounded-2xl p-1">
            <span className="upr text-black bg-green-500 mr-1  relative bottom-1">
              *
            </span>
            Free trial eligibility determied on log-in
          </p>
          <p className="lwr text-blue-100 bg-blue-600 p-1 py-0 rounded-xl">
            Additional terms may apply.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
