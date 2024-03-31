import React from "react";

function Footer() {
  return (
    <div className="Outer box-border w-full  h-fit mx-auto mt-4 mb-16">
      <div className="footer  box-border flex flex-col  md:flex-row justify-center items-center md:gap-6 p-2">
        <div className="linkedInFooter hidden md:flex mt-4 items-center text-lg md:text-base md:mt-0">
          <p className="title text-lg font-medium text-black tracking-wider">
            <span className="linkedSpan  font-bold text-blue-500 tracking-tight">
              Linked
            </span>
            <span className="inSpan mx-1 mr-2 rounded font-semibold text-white bg-blue-500">
              in
            </span>
          </p>
          <p className="copyright text-gray-500 text-md">
            @LinkedIn corpotation 2024
          </p>
        </div>

        <div className="links box-border flex flex-col md:flex-row justify-center items-center md:gap-3 text-lg md:text-base">
          <p className="about text-black ">About</p>
          <p className="cookie text-black ">Cookie Policy</p>
          <p className="privacy text-black ">Privacy Policy</p>
          <p className="user text-black ">User Agreement</p>
        </div>

        <div className="linkedInFooter flex mt-4 items-center text-lg md:hidden">
          <p className="title text-lg font-medium text-black tracking-wider">
            <span className="linkedSpan  font-bold text-blue-500 tracking-tight">
              Linked
            </span>
            <span className="inSpan mx-1 mr-2 rounded font-semibold text-white bg-blue-500">
              in
            </span>
          </p>
          <p className="copyright text-gray-500 text-md">
            @LinkedIn corpotation 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
