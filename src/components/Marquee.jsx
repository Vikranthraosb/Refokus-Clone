import React from "react";

function Marquee({ imageUrls }) {
  return (
    <div className="flex w-full py-8 gap-20 overflow-hidden">
      {imageUrls.map((url, index) => (
        <img src={url} className="flex-shrink-0 w-22" />
      ))}
      {imageUrls.map((url, index) => (
        <img src={url} className="flex-shrink-0 w-22" />
      ))}
    </div>
  );
}

export default Marquee;
