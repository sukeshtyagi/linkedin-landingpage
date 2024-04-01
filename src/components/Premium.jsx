import React from "react";
import Header from "./landingPageChildCompoents/Header";
import Footer from "./landingPageChildCompoents/Footer";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Premium({ child }) {
  return (
    <div className="outer box-border w-screen h-screen">
      <Header parent="premium" />

      {child === "signup" && <SignUp />}
      {child === "signin" && <SignIn />}

      <Footer />
    </div>
  );
}

export default Premium;
