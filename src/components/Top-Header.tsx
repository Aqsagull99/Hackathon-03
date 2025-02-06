import { X } from "lucide-react";
import React from "react";

function TopHeader() {
  return (
    <div className="w-full h-[60px] bg-primary text-maintext  hidden sm:flex  items-center justify-between  px-4">
      {/* Left Section */}
      <p className="font-poppins text-sm sm:text-xs md:text-base lg:text-lg font-normal text-center flex-1">
        Sign up and get 20% off to your first order.{" "}
        <span className="underline text-maintext underline-offset-4">
          Sign Up Now
        </span>
      </p>

      {/* Right Section */}
      <div className="text-white flex-shrink-0 cursor-pointer mr-6">
        <X size={24} />
      </div>
    </div>
  );
}

export default TopHeader;
