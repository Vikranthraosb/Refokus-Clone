import React from "react";
import Buttons from "./Buttons";

function Product({ val, mover, count }) {
  return (
    <div className="w-full py-10 px-3 text-white bg-zinc-700 h-[17rem]">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-5xl capitalize font-medium">{val.title}</h1>
        <div className="details w-1/3">
          <p className="mb-5">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Buttons title="Hello" />}
            {val.case && <Buttons title="hello" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
