"use client";

import { MessageCircleIcon, User2Icon } from "lucide-react";
import Image from "next/image";
import Footer from "../footer";

function CustomerService() {
  return (
    <div className="flex flex-col">
      {/* Header */}
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

      {/* Main content */}
      <div className="grid sm:grid-cols-2 sm:px-20 py-10 grid-cols-1">
        {/* Left side - Form */}
        <div className="flex flex-col justify-center items-start px-10 gap-5">
          <div>
            <h3 className="text-4xl font-bold text-[#D02149]">
              Card banking
            </h3>
          </div>

          <h3 className="font-semibold text-md">
            Select from the following cards
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

          {/* Updated section */}
          <h3 className="font-semibold text-sm">Please fill the form below</h3>

          <form className="flex flex-col gap-3 w-3/4 max-w-sm text-xs">
            {/* Card type selection */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Select your card type please
              </label>
              <div className="flex flex-wrap gap-1 ml-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="card_type" value="Gift card" /> Gift
                  card
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="card_type" value="Prepaid card" />{" "}
                  Prepaid card
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="card_type" value="Payroll card" />{" "}
                  Payroll card
                </label>
              </div>
            </div>

            {/* Card number input */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Enter card number
              </label>
              <input
                type="text"
                name="card_number"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your card number"
                required
              />
            </div>

            {/* Complaint type */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Complaint type
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
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Describe your issue..."
                required
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="flex justify-end">
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
          <div className="relative w-70 h-70 sm:w-full sm:h-full rounded-lg">
            <Image
              alt="login image"
              src="/images/card_banking.svg"
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
