import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Buttons() {
  return (
    <div className="min-w-40 py-2 px-4 text-black rounded-full bg-gray-100 ">
      <span className="text-sm text-center font-semibold flex items-center justify-around">
        Get Started <IoIosReturnRight />
      </span>
    </div>
  );
}

export default Buttons;
