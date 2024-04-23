import React from "react";
import { motion } from "framer-motion";

function Marquee({ imageUrls, direction }) {
  return (
    <div className="flex w-full py-8 overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "-0%" }}
        transition={{ ease: `linear`, duration: 10, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-10 pr-20"
      >
        {imageUrls.map((url, index) => (
          <img key={index} src={url} className="flex-shrink-0 w-22" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "-0%" }}
        transition={{ ease: `linear`, duration: 10, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-10 pr-20"
      >
        {imageUrls.map((url, index) => (
          <img key={index} src={url} className="flex-shrink-0 w-22" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
