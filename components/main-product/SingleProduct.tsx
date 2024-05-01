"use client";
import ProductLoading from "../../app/[locale]/(dashboard)/products/loading";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../UI/Button";
import { SingleProductProps } from "../../types/types";

export default function SingleProduct({ data }: SingleProductProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = data;

  return (
    <>
      <div className="bg-[#07212e] flex items-center justify-center h-[450px]">
        <div className="flex-col gap-8  flex ">
          <h1 className="text-[#F28123] text-center tracking-widest text-xl">
            SEE MORE DETAILS
          </h1>
          <h1 className="text-center text-white text-4xl sm:text-5xl ">
            Single Product
          </h1>
        </div>
      </div>

      {thumbnail ? (
        <div className="flex flex-col sm:flex-row justify-center items-center m-5 sm:m-20 h-3/4 sm:gap-12 sm:p-20">
          <Image
            className="w-full lg:w-96 sm:h-96 shadow-2xl rounded-md"
            width={500}
            height={500}
            src={thumbnail}
            quality={100}
            alt={`image ${title}`}
            onClick={() => setSelectedImage(thumbnail)}
          />
          <div className="h-full gap-5    flex">
            <div className=" h-full flex flex-col gap-3  py-4 ">
              <div className="font-bold  mb-2 text-2xl">{title}</div>
              <span className="font-bold text-gray-900 dark:text-white text-2xl">
                ${price}
              </span>
              <p className="text-gray-500 text-base w-full lg:w-96">
                {description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-600 dark:text-white">
                  Discount: {discountPercentage}%
                </span>
              </div>
              <div className="flex items-center  mt-2">
                <span className="text-sm text-gray-600 dark:text-white mr-1">
                  Rating:
                </span>
                <div className="Stars"></div>
                <span className="ml-1 ">{rating?.toFixed(1)}</span>
              </div>
              <div className="mt-4">
                <span className="text-sm text-gray-600 dark:text-white">
                  Available: {stock} in stock
                </span>
              </div>
              <div className="flex gap-2">
                Categories:
                <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {brand}
                </span>
                <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {category}
                </span>
              </div>
              <div className="mt-3">
                <Button>Add to Cart</Button>
              </div>
            </div>
            {selectedImage !== null && (
              <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
                <div className="max-w-6xl mx-auto">
                  <Image
                    className="w-full h-full object-contain rounded-xl"
                    height={800}
                    width={800}
                    quality={100}
                    src={selectedImage}
                    alt={`Product Image ${selectedImage}`}
                  />
                  <button
                    className="absolute top-2 right-2 bg-white p-2 rounded-md"
                    onClick={() => setSelectedImage(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <ProductLoading />
      )}
    </>
  );
}
