import React from "react";

function Hero() {
  return (
    <div className="hero box-border w-full h-full overflow-hidden border-t-4 border-blue-400 relative">
      <img src="/images/h8.jpg" alt="" className="box-border w-full h-96" />

      <div className="overlayDiv box-border w-full h-full absolute top-0 left-0 flex flex-col items-start justify-center gap-20">
        <div className="topDiv box-border w-1/2 flex flex-col items-center justify-center gap-3 ">
          <p className="upper text-black text-3xl p-2 leading-9 tracking-normal">
            Discover how premium can help you
          </p>
          <button className="lower text-white text-lg font-normal bg-blue-900 px-8 py-2 rounded">
            Upgrade for 1 month
          </button>
        </div>

        <div className="bottomDiv box-border w-1/2 flex flex-col justify-center items-center gap-4">
          <p className="upr text-black text-xl bg-green-500 rounded-2xl p-2">
            <span className="upr text-black text-xl bg-green-500 mr-1  relative bottom-1">
              *
            </span>
            Free trial eligibility determied on log-in
          </p>
          <p className="lwr text-blue-100 text-xl bg-blue-600 p-3 py-0 rounded-xl">
            Additional terms may apply.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
