import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ parent, smallScreen, setSmallScreen }) {
  const navigate = useNavigate();
  return (
    <div
      className={`header box-border w-full p-2 px-4 flex justify-between items-center text-sm sm:text-base caret-transparent bg-slate-50 ${
        parent ? " h-1/6" : " h-fit"
      }`}
    >
      <p className="premium font-medium flex items-center text-black tracking-wider">
        <span
          className={`linkedSpan  font-bold text-blue-500 tracking-tight  ${
            parent ? "text-2xl" : "text-xl"
          }`}
        >
          Linked
        </span>
        <span className="inSpan mx-1 mr-2 p-1  rounded font-semibold text-white bg-blue-500">
          in
        </span>
        PREMIUM
      </p>

      {!parent && !smallScreen && (
        <div className="icon md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={() => {
              setSmallScreen(true);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      )}

      {!parent && smallScreen && (
        <div className="icon md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={() => {
              setSmallScreen(false);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}

      {!parent && (
        <button
          className="headerButton hidden md:block box-border w-1/4 h-1/6 border rounded border-blue-500	border-2 text-blue-500 font-medium"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Start my free trial
        </button>
      )}
    </div>
  );
}

export default Header;
