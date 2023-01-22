import React from "react";
import SignInPhoto from "../assets/signinpicture.jpg";

function ResetPasswordMessage() {
  return (
    <section>
      <h1 className="text-center text-3xl mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="w-full rounded-2xl" src={SignInPhoto} alt="Landslet sign in" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <h3>Email Sent</h3>
          <p>
            An email been sent to , Please click on the link in your email to reset your account
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResetPasswordMessage;
