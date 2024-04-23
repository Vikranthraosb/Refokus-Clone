import React from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import { useState } from "react";

function Products() {
  var products = [
    { title: "aa", description: "demo description 1", live: true, case: false },
    {
      title: "ttr",
      description: "demo description 2",
      live: true,
      case: false,
    },
    { title: "yir", description: "demo description 3", live: true, case: true },
    { title: "zir", description: "demo description 4", live: true, case: true },
  ];
  const [position, setposition] = useState(0);
  const mover = (val) => setposition(val * 17);
  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[17rem] bg-white left-[44%] -translate-x-[50%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full bg-sky-200"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full bg-sky-300"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full bg-sky-400"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full bg-sky-500"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          ></motion.div>{" "}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
