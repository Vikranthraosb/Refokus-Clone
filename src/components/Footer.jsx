import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl py-10 flex gap-32 mx-auto">
        <div className="basis-1/2">
          <h1 className="text-9xl font-semibold leading-none tracking-tight">
            Refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h1 className="mb-10 text-zinc-400 capitalize text-lg">Socials</h1>
            {["instagram", "twitter", "Linkdin"].map((item, index) => (
              <a
                key={index}
                href=""
                className="block m-2 capitalize text-zinc-500"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h1 className="mb-10 text-zinc-400 capitalize text-lg">Socials</h1>
            {["instagram", "twitter", "Linkdin"].map((item, index) => (
              <a
                key={index}
                href=""
                className="block m-2 capitalize text-zinc-500"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
