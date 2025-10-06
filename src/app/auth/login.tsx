"use client";

import Image from "next/image";
import React from "react";

function Login() {
  return (
    <div className="grid sm:grid-cols-2  sm:px-20 py-10 grid-cols-1">
      {/* Left side - Form */}
      <div className="flex flex-col justify-center items-start px-10 gap-8">
        <div className="relative w-40 h-15">
          <Image alt="login logo" src="/images/feedback_logo.svg" fill />
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#D02149]">Welcome to<br/> Feedback collection<br/> System</h3>
        </div>

        <form className="flex flex-col gap-2 w-3/4 max-w-sm">
          <h1 className="text-xl font-bold text-center">Sign in here please</h1>
          <label className="text-sm font-semibold">Email</label>
          <input
            className="border bg-[#FFF8F8]  p-2 rounded-lg border-[#706B6B]"
            type="email"
            placeholder="Email"
          />
          <label className="text-sm font-semibold">Password</label>
          <input
          
            className="border  bg-[#FFF8F8] rounded-lg  p-2 border-[#706B6B] "
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-end w-full">
          <button className="bg-[#D02149] cursor-pointer text-white w-[30%] rounded-lg p-2  text-xs hover:bg-blue-600 transition">
            Login
          </button>
          </div>
        </form>
      </div>

      {/* Right side - Image */}
      <div className="flex justify-center items-center">
      <div className="relative  w-70 h-70 sm:w-full sm:h-full">
        <Image
          alt="login image"
          src="/images/login_logo.svg"
          fill
          className="object-cover"
        />
      </div>
      </div>
    </div>
  );
}

export default Login;
