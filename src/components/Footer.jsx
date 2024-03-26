import React from "react";

function Footer() {
  return (
    <div className="Outer box-border w-fit h-fit mx-auto mt-4 mb-16">
      <div className="footer  box-border flex justify-start items-center gap-0 p-2">
        <p className="title text-xl font-medium text-black tracking-wider">
          <span className="linkedSpan text-lg font-bold text-blue-500 tracking-tight">
            Linked
          </span>
          <span className="inSpan mx-1 mr-2 p-1 text-lg rounded font-semibold text-white bg-blue-500">
            in
          </span>
        </p>

        <div className="links box-border flex justify-start items-center gap-10">
          <p className="copyright text-gray-500">@LinkedIn corpotation 2024</p>
          <p className="about text-black">About</p>
          <p className="cookie text-black">Cookie Policy</p>
          <p className="privacy text-black">Privacy Policy</p>
          <p className="user text-black">User Agreement</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
