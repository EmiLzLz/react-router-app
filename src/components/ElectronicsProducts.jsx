import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  slidesPerView,
  breakpoints,
  pagination,
} from "../helpers/SwiperSettings";
import { useFetch } from "../hooks/useFetch";
import "swiper/css";
import { Icon } from "@iconify/react";
import Loader from "./Loader";

function ElectronicsProducts() {
  const [addItem, setAddItem] = useState([]);

  let url = "https://fakestoreapi.com/products/category/electronics";

  let { data } = useFetch(url);

  if(!data){
    return <Loader />
  }

  const handleAdd = (product) => {
    const item = {
      title: product.title,
      image: product.image,
      price: product.price,

    }

    setAddItem((prevItems) => [...prevItems, item])

    console.log(addItem);
  }

  

  return (
    <div className="slider-container w-full pb-8">
      <Swiper
        modules={[Pagination]}
        pagination={{ ...pagination }}
        slidesPerView={slidesPerView}
        breakpoints={{
          ...breakpoints,
        }}
        className="electronics container mx-auto overflow-hidden flex cursor-grab px-2 pt-8 pb-2"
      >
        {data.map((product) => (
            <SwiperSlide
              key={product.id}
              className="product-card h-auto bg-white rounded-md overflow-hidden flex flex-col justify-between"
            >
              <div className="product-img w-full h-64">
                <img
                  className="w-full h-full pointer-events-none"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="description p-1">
                <h1 className="text-[#6BD425] font-bold pb-1">
                  {product.title}
                </h1>
                <p className="font-extrabold">${product.price}</p>
                <p className="whitespace-nowrap text-ellipsis overflow-hidden text-[#6247AA]">
                  {product.description}
                </p>
              </div>
              <div className="actions pb-2 pt-2 px-1 w-full flex flex-col md:flex-row justify-center items-center gap-4">
                <button onClick={()=>handleAdd(product)} className="add-btn text-white rounded-md bg-[#93032E] p-2 w-full md:w-auto flex items-center justify-center gap-1">
                  <Icon
                    icon="fluent-emoji-high-contrast:shopping-cart"
                    style={{ fontSize: "28px" }}
                  />
                  Add
                </button>
                <Link
                  to={`/products/${product.id}`}
                  className="text-[#93032E] font-bold flex items-center gap-1"
                >
                  <Icon
                    icon="carbon:view-filled"
                    style={{ fontSize: "28px" }}
                  />
                  View
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="pagination w-full flex items-center justify-center py-4" />
    </div>
  );
}

export default ElectronicsProducts;
