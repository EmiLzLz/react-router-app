import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import { Icon } from "@iconify/react";
import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";

function ProductDetail() {
  function handleGoBack() {
    navigate(-1);
  }

  const navigate = useNavigate();

  const { id } = useParams();

  let url = `https://fakestoreapi.com/products/${id}`;

  let { data } = useFetch(url);

  return (
    <div className="product-details px-2 md:px-0">
      <h3 className="font-bold text-center pb-8 text-4xl">Product detail</h3>
      {data ? (
        <div className="product-info pb-6 md:pb-0 container mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="image w-full h-96 flex items-center justify-center my-auto">
            <img
              src={data.image}
              alt={data.title}
              className=" h-full"
            />
          </div>
          <div className="product-about px-0 md:px-4 my-auto">
            <h4 className="font-bold text-3xl pb-4 text-[#6BD425]">
              {data.title}
            </h4>
            <p className="text-2xl pb-4 text-[#6247AA]">
              {data.description}
            </p>
            <p className="text-2xl pb-4 font-extrabold">
              ${data.price}
            </p>
            <div className="actions">
              <button className="add-btn text-white rounded-md bg-[#93032E] p-2 w-full md:w-auto flex items-center justify-center gap-1">
                <Icon
                  icon="fluent-emoji-high-contrast:shopping-cart"
                  style={{ fontSize: "28px" }}
                />
                Add
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <button
        onClick={handleGoBack}
        className="back-btn rounded-md bg-[#93032E] text-white mx-auto p-2 w-full md:w-48 flex items-center justify-center"
      >
        <Icon icon="ei:arrow-left" style={{ fontSize: "28px" }} />
        Go Back
      </button>
    </div>
  );
}

export default ProductDetail;
