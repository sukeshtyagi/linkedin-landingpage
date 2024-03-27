import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate()
  return (
    <div className="header box-border w-10/12 h-fit p-2 px-6 flex justify-between bg-red-200 m-auto my-4 bg-white">
      <p className="premium text-xl font-medium text-black tracking-wider">
        <span className="linkedSpan text-2xl font-bold text-blue-500 tracking-tight">
          Linked
        </span>
        <span className="inSpan mx-1 mr-2 p-1 text-xl rounded font-semibold text-white bg-blue-500">
          in
        </span>
        PREMIUM
      </p>
      <button className="headerButton box-border w-1/6 h-1/6 border rounded border-blue-500	border-2 text-blue-500 font-medium"
      onClick={()=>{
        navigate('/signup')
      }}
      >
        Start my free trial
      </button>
    </div>
  );
}

export default Header;
