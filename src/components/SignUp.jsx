import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <h1 className="box-border w-full bg-gray-200 text-center text-base sm:text-xl sm:text-xl font-normal text-black  px-3 pt-6 sm:pb-2 mt-4">
        Make the most of your professional life
      </h1>

      <div className="singUp box-border w-full h-fit bg-gray-200 font-normal flex flex-col items-center pb-12 mb-12">
        <div className="inputs box-border w-full md:w-1/2 sm:w-3/4 text-sm sm:text-lg m-auto font-normal flex flex-col items-start bg-white p-4 my-4 pb-8">
          <label className="box-border  font-normal text-black py-2">
            Email or phone number
          </label>
          <input
            type="text"
            className="inputs box-border w-full outline-none border border-black rounded h-9 px-5 py-2 "
          />

          <label className="box-border font-normal text-black py-1 mt-4">
            Password (6+characters)
          </label>

          <div className="flex items-center bg-white w-full border border-black rounded">
            <input
              type={showPassword ? "text" : "password"}
              className="inputs box-border w-full outline-none rounded-lg h-8 px-5 py-2"
            />
            <button
              className="text-blue-500 mr-5 p-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              Show
            </button>
          </div>

          <p className="box-border w-full text-center text-zinc-600 mt-3 mb-6">
            By clicking Agree & Join or Continue,you agree to the LinkedIn{" "}
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
          <button className="box-border w-full h-12 m-auto bg-blue-500 p-2 text-white font-normal rounded-3xl">
            Agree & Join
          </button>

          <div className="segregation box-border w-full flex justify-center items-center my-6">
            <div className="empty1 box-border w-1/3 h-[2px] bg-gray-400 border  border-gray-600 rounded-xl"></div>
            <p className="box-border mx-4 text-base">OR</p>
            <div className="empty2 box-border w-1/3 h-[2px] bg-gray-400 border  border-gray-600 rounded-xl"></div>
          </div>

          <button className="box-border w-full  h-12 text-black text-base sm:text-lg font-normal rounded-3xl border border-gray-600 mb-6 flex justify-center items-center gap-6">
            <FontAwesomeIcon icon={faGoogle} className="w-3 h-3 ml-8 " />
            Continue with Google
          </button>
          <p className="box-border w-full text-center text-sm  mt-2">
            Already on LinkedIn ?
            <NavLink to="/signin" className="text-blue-700 mx-2">
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
