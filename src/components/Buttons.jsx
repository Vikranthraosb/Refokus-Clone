import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Buttons({ title = "get started" }) {
  return (
    <div className="w-40 py-2 px-4 text-black rounded-full bg-gray-100 ">
      <span className="text-sm text-center font-semibold flex items-center justify-around">
        {title} <IoIosReturnRight />
      </span>
    </div>
  );
}

export default Buttons;
