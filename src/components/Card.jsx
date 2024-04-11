import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Card({ width, start, para, hover }) {
  //given default value
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between hover:${hover}`}
    >
      <div className="up w-full">
        <div className="w-full flex justify-between items-center">
          <h3>Heading one</h3>
          <FaLongArrowAltRight />
        </div>
        <h1 className="text-3xl mt-10 font-medium"> Whaterver heading it is</h1>
      </div>
      <div className="down w-full ">
        {start === true && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="px-5 py-2 border-[1px] border-zinc-50 rounded-full mt-5">
              Contact us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            cumque
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
