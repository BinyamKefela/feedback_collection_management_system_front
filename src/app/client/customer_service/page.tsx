"use client";

import { MessageCircleIcon, User2Icon } from "lucide-react";
import Image from "next/image";
import Footer from "../footer";

function CustomerService() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-10">
        <div className="flex flex-col justify-center items-start px-23 gap-8">
          <div className="relative w-40 h-13">
            <Image
              alt="login logo"
              src="/images/zemen_bank_logo_white.svg"
              fill
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-x-2 justify-end items-center px-20">
          <h3 className="text-sm font-semibold">Jhon Doe</h3>
          <div className="h-10 w-10 rounded-full bg-blue-300"></div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2  sm:px-20 py-10 grid-cols-1">
        {/* Left side - Form */}
        <div className="flex flex-col justify-center items-start px-10 gap-5">
          <div>
            <h3 className="text-4xl font-bold text-[#D02149]">
              Customer service
            </h3>
          </div>
          <h3 className="font-semibold text-md">
            select from the following cards
          </h3>
          <div className="flex flex-wrap gap-2">
            <button className="border text-white bg-[#D4254D] cursor-pointer text-xs py-1.5 px-4 rounded flex flex-wrap gap-x-1">
              <User2Icon size={15} /> complaint
            </button>
            <button className="border text-xs py-1.5 px-4 cursor-pointer gap-x-1 flex flex-wrap rounded">
              <MessageCircleIcon size={15} /> comment
            </button>
            <button className="border text-xs py-1.5 px-4 cursor-pointer rounded">
              Recommendation
            </button>
          </div>

          <h3 className="font-semibold text-sm">Fill in the form below</h3>

          <form className="flex flex-col gap-2 w-3/4 max-w-sm">
            <div className="text-xs">
              <label className="block text-gray-700 mb-2 font-medium">
                Branch selection
              </label>
              <select
                name="branch"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="">Select Branch</option>
                <option value="Addis Ababa">Addis Ababa</option>
                <option value="Mekelle">Mekelle</option>
                <option value="Hawassa">Hawassa</option>
              </select>
            </div>

            {/* Complaint type */}
            <div className="text-xs">
              <label className="block text-gray-700 mb-2 font-medium">
                complaint type
              </label>
              <select
                name="complaint_type"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="">Select Complaint Type</option>
                <option value="Service">Service</option>
                <option value="Product Quality">Product Quality</option>
                <option value="Billing">Billing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="text-xs">
              <label className="block text-gray-700 mb-2 font-medium">
                message
              </label>
              <textarea
                name="message"
                className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Describe your issue..."
                required
              ></textarea>
            </div>

            {/* Submit button aligned right */}
            <div className="flex justify-end text-xs">
              <button
                type="submit"
                className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center items-center">
          <div className="relative  w-70 h-70 sm:w-full sm:h-full rounded-lg">
            <Image
              alt="login image"
              src="/images/customer_service.svg"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CustomerService;
