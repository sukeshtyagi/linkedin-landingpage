import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";

function SingIn() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="outer box-border w-3/4 m-auto bg-gray-400 my-16 rounded-xl p-4 py-10">
      <div className="signin box-border w-1/2  mx-auto my-10 bg-white px-8 py-4 rounded-xl">
        <h1 className="box-border w-fit h-fit text-3xl py-2 px-0 font-bold text-black">
          Sign in
        </h1>
        <p className="box-border w-full tracking-wide text-xl  text-black font-normal pb-4">
          Stay updated on your professional world
        </p>
        <div className="flex flex-col items-start bg-white w-full border border-black rounded px-2 mb-4">
          <label className="py-1 px-2">Email or Phone</label>
          <input
            type="text"
            className="inputs box-border text-lg w-full outline-none rounded-lg h-8 px-2 py-2"
          />
        </div>

        <div className="flex items-center bg-white w-full border border-black rounded">
          <input
            type="password"
            className="inputs box-border w-full outline-none rounded-lg h-8 px-5 py-2"
          />
          <button className="text-blue-500 text-lg mr-5 p-1">Show</button>
        </div>
        <p className="box-border my-2 text-xl text-blue-700">
          Forgot Password?
        </p>
        <button className="box-border w-full h-12 m-auto bg-blue-500 p-2 text-white text-xl font-normal rounded-3xl my-6">
          Sign in
        </button>

        <div className="segregation box-border w-full flex justify-center items-center my-6">
          <div className="empty1 box-border w-1/3 h-[2px] bg-gray-400 border  border-gray-600 rounded-xl"></div>
          <p className="box-border mx-4 text-xl">OR</p>
          <div className="empty2 box-border w-1/3 h-[2px] bg-gray-400 border  border-gray-600 rounded-xl"></div>
        </div>

        <p className="box-border w-full text-center text-zinc-600 mt-3 mb-6">
          By clicking Continue,you agree to the LinkedIn{" "}
          <NavLink to="/user-agreement" className="text-blue-700">
            User Agreement
          </NavLink>
          ,{" "}
          <NavLink to="/privacy-policy" className="text-blue-700">
            Privacy Policy
          </NavLink>
          , and
          <NavLink to="/cookie-policy" className="text-blue-700">
            Cookie Policy
          </NavLink>
          .
        </p>

        <button className="box-border w-full h-12 m-auto p-2 text-black text-lg font-normal rounded-3xl border border-gray-600 mb-6 flex justify-start items-center gap-20">
          <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 ml-12" />
          Continue with Google
        </button>

        <button className="box-border w-full h-12 m-auto p-2 text-black text-lg font-normal rounded-3xl border border-gray-600 mb-6 flex justify-start items-center gap-20">
          <FontAwesomeIcon icon={faApple} className="w-8 h-8 ml-10" />
          Sign in with Apple
        </button>

        <button className="box-border w-full h-12 m-auto p-2 text-black text-lg font-normal rounded-3xl border border-gray-600 mb-6 flex justify-start items-center gap-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-blue-600 ml-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          Sign in with one-time link
        </button>
      </div>
    </div>
  );
}

export default SingIn;
