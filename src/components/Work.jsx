import React from "react";
import { useState } from "react";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Work() {
  const [images, setimages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "47%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "52%",
      left: "40%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "57%",
      left: "57%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "60%",
      left: "59%",
      isactive: false,
    },
  ]);
  //framer motion start
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageshow(arr) {
      setimages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isactive: false }
            : { ...item, isactive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imageshow([]);
        break;
      case 1:
        imageshow([0]);

        break;
      case 3:
        imageshow([0, 1]);

        break;
      case 4:
        imageshow([0, 1, 2]);

        break;
      case 5:
        imageshow([0, 1, 2, 3]);

        break;
      case 6:
        imageshow([0, 1, 2, 3, 4]);

        break;
      case 7:
        imageshow([0, 1, 2, 3, 4, 5]);

        break;
    }
  });
  return (
    <div className="w-full mt-20">
      <div className="relative max-w-screen-xl mx-auto mt-2 p-6">
        <h1 className="text-[25vw] leading-none tracking-tight font-semibold text-center select-none">
          WORK
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isactive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
