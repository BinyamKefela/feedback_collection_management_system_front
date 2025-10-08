"use client";
import React from "react";
import { Smartphone, MessageCircle, Check } from "lucide-react";

const Howtouse = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 text-center bg-white">
      <h2 className="text-center text-2xl font-bold md:text-3xl mb-16">
        How to use this service
      </h2>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-80 w-full max-w-6xl">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center w-64 mb-10 md:mb-0">
          <div className="bg-blue-600 rounded-full w-28 h-28 flex items-center justify-center mb-4">
            <Smartphone className="text-white w-12 h-12" />
          </div>
          <h3 className="font-semibold text-lg mb-2">
            Scan using your mobile phone
          </h3>
          <p className="text-sm text-gray-600">
            Open your smartphone
            <br />
            and scan the QR provided
          </p>
        </div>

        {/* Dashed Line 1 */}
        <div className="hidden md:block absolute top-[25%] left-[13%] w-[32%] border-t-2 border border-gray-500"></div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center w-64 mb-10 md:mb-0">
          <div className="bg-rose-600 rounded-full w-28 h-28 flex items-center justify-center mb-4">
            <MessageCircle className="text-white w-12 h-12" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Fill the feedback form</h3>
          <p className="text-sm text-gray-600">
            Fill the form according to the questionnaire you see on the mobile screen
          </p>
        </div>

        {/* Dashed Line 2 */}
        <div className="hidden md:block absolute top-[25%] right-[13%] w-[32%] border-t-2 border border-gray-500"></div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center w-64">
          <div className="bg-green-500 rounded-full w-28 h-28 flex items-center justify-center mb-4">
            <Check className="text-white w-12 h-12" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Submit the form</h3>
          <p className="text-sm text-gray-600">
            You will receive a success popup screen after completing the form
          </p>
        </div>
      </div>
    </section>
  );
};

export default Howtouse;
