import React from "react";
import Product from "./Product";
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

  return (
    <div>
      {products.map((val, index) => (
        <Product val={val} />
      ))}
    </div>
  );
}

export default Products;
