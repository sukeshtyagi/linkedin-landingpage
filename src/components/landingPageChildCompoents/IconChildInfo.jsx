import React from "react";
import { useNavigate } from "react-router-dom";

function IconChildInfo({ name, heading, para }) {
  const navigate = useNavigate();

  return (
    <div className="outer box-border h-fit bg-gradient-to-r from-customGray  via-red-100 to-customGray mb-5 text-base sm:text-xl md:text-2xl lg:text-3xl ">
      <div className="iconDiv box-border w-full p-2 flex justify-center items-center gap-2 mb-4">
        {name === "On-Demand Learning" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-yellow-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        )}

        {name === "Monthly Inmail" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-yellow-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        )}

        {name === "Who's Viewed Your Profile" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-yellow-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        )}

        {name === "Applicant Insights" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-yellow-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
            />
          </svg>
        )}

        <h1 className="name text-yellow-700  w-fit p-2">{name}</h1>
      </div>

      <div className="coverDiv box-border w-full h-full flex flex-col lg:flex-row lg:justify-evenly lg:items-start lg:mt-4 lg:p-4 ">
        <div className="details box-border lg:w-1/2 px-4">
          <h1 className="heading  w-full text-xl sm:text-2xl md:text-3xl  text-black p-2 font-light">
            {heading}
          </h1>
          <p className="para w-full xl:w-3/4 text-lg sm:text-xl md:text-2xl lg:text-xl text-gray-600 font-normal p-2">
            {para}
          </p>
          <button
            className="commonButton box-border border border-blue-500 px-2 py-1 flex justify-center items-center mt-3 mb-12 ml-2"
            onClick={() => {
              navigate("/signup");
            }}
          >
            <span className="text-blue-500 text-base sm:text-xl md:text-2xl lg:text-xl md:p-1">
              Upgrade free for 1 month
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24 "
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <p className="commonPara text-base sm:text-lg md:text-xl text-gray-500 p-1">
            *Free eligibility determined on log-in.
          </p>
        </div>

        <div className="imgDiv box-border w-full lg:w-1/2 h-full">
          {name === "On-Demand Learning" && (
            <img
              src="/images/skills.jpg"
              alt=""
              className="box-border lg:h-72 mt-16 rounded-xl lg:mt-0"
            />
          )}

          {name === "Monthly Inmail" && (
            <img
              src="/images/inmail.png"
              alt=""
              className="box-border w-11/12 lg:h-72 mt-16 rounded-xl lg:mt-0"
            />
          )}

          {name === "Who's Viewed Your Profile" && (
            <img
              src="/images/view.jpg"
              alt=""
              className="box-border lg:h-72 mt-16 rounded-xl lg:mt-0"
            />
          )}

          {name === "Applicant Insights" && (
            <img
              src="/images/job.png"
              alt=""
              className="box-border w-11/12 lg:h-72 mt-16 rounded-xl lg:mt-0"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default IconChildInfo;
