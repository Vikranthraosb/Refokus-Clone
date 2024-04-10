import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-[20%] px-4 py-4 border-t-[1.2px] border-b-[1.2px] border-r-[1.5px] border-zinc-600 flex justify-around items-center mb-5">
      <img src={val.url} alt="" />
      <span className="font-semibold text-xl">{val.number}</span>
    </div>
  );
}

export default Stripe;
