import React from "react";
import Buttons from "./Buttons";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-7 flex justify-between border-b-[1px] border-gray-600">
      <div className="navleft flex items-center ">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-20 ml-20">
          {["Home", "work", "culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[2px] h-7 bg-zinc-500"></span>
            ) : (
              <a className="text-sm  gap-2 flex items-center" href="#">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 1em green" }}
                    className="inline-block w-2 h-2 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Buttons />
    </div>
  );
}

export default Navbar;
