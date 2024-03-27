import React from "react";
import Header from "./landingPageChildCompoents/Header";
import Footer from "./landingPageChildCompoents/Footer";
import SignUp from "./SignUp";
import SingIn from "./SingIn";

function Premium({ child }) {
  return (
    <div className="outer">
      <Header parent="premium" />

      {child === "signup" && <SignUp />}
      {child === "signin" && <SingIn />}

      <Footer />
    </div>
  );
}

export default Premium;
