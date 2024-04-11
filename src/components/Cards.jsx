import React from "react";
import Card from "./Card";
function Cards() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto bg-zinc-700 py-20 flex gap-2">
        <Card width={"basis-1/3"} start={false} para={true} />
        <Card
          width={"basis-2/3"}
          start={true}
          para={false}
          hover={"bg-violet-700"} // jsx not working until we manually put hover property in classname once. after that its working. i dont know why??
        />
      </div>
    </div>
  );
}

export default Cards;
