"use client";

import { EyeOffIcon, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
          <h3 className="text-3xl font-bold text-[#A7710D]">
            Welcome to Feedback collection Management System
          </h3>
        </div>

        <form className="flex flex-col gap-2 w-3/4 max-w-sm">
          <h1 className="text-xl text-center">Please login to access</h1>
          <label className="text-sm ">Email</label>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg"
              h-2
              w-2
            />
            <input
              className="border bg-[#FFF8F8] pl-10 w-full  p-2 rounded-lg border-[#706B6B]"
              type="email"
              placeholder="Email"
            />
          </div>
          <label className="text-sm">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
            <EyeOffIcon className="absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              className="border  bg-[#FFF8F8] pl-10 w-full  p-2 rounded-lg border-[#706B6B]"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-end w-full">
            <Link href={"/admin/dashboard"} className="mt-4  bg-[#A7710D] w-full  cursor-pointer text-white   text-xs hover:bg-blue-600 transition  rounded-lg ">
              <button className="bg-[#A7710D] w-full  h-10 cursor-pointer text-white  rounded-lg   text-xs hover:bg-blue-600 transition">
                Login
              </button>
            </Link>
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
