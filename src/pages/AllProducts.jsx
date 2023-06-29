import React from "react";
import ElectronicsProducts from "../components/ElectronicsProducts";
import JeweleryProducts from "../components/JeweleryProducts";
import MensProducts from "../components/MensProducts";
import WomensProducts from "../components/WomensProducts";

function AllProducts() {
  return (
    <div className="all-products bg-[#030301] h-full">
      <h2 className="text-center text-3xl text-white font-bold pt-5">ELECTRONICS</h2>
      <ElectronicsProducts />
      <h2 className="text-center text-3xl text-white font-bold pt-5">JEWELERY</h2>
      <JeweleryProducts />
      <h2 className="text-center text-3xl text-white font-bold pt-5">MEN'S </h2>
      <MensProducts />
      <h2 className="text-center text-3xl text-white font-bold pt-5">WOMEN'S</h2>
      <WomensProducts />
    </div>
  );
}

export default AllProducts;
