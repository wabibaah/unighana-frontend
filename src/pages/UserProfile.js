import React from "react";
import { useNavigate } from "react-router-dom";
import SignInPhoto from "../assets/signinpicture.jpg";

function UserProfile() {
  const navigate = useNavigate();
  const user = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  // const { email, firstname, lastname, mobile } = user;
  const email = user?.email;
  const firstname = user?.firstname;
  const lastname = user?.lastname;
  const mobile = user?.mobile;

  function onLogout() {
    localStorage.removeItem("userInfo");
    navigate("/");
  }

  return (
    <section>
      <h1 className="text-center text-3xl mt-6 font-bold">Your profile</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="w-full rounded-2xl" src={SignInPhoto} alt="Landslet sign in" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <h3>
            Hello {firstname && firstname} {lastname && lastname}
          </h3>
          <p>you are welcome</p>
          <p>your email is {email && email}</p>
          <p>your mobile phone number is {mobile && email}</p>
        </div>
        <button
          type="click"
          onClick={onLogout}
          className="w-full bg-red-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
        >
          Log Out
        </button>
      </div>
    </section>
  );
}

export default UserProfile;
