"use client";
import ProductLoading from "@/app/products/loading";
import Image from "next/image";
import React, { useState } from "react";

export default function SingleProduct({ data }) {
  const [selectedImage, setSelectedImage] = useState(null);

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
    images,
  } = data;

  return (
    <>
      {thumbnail ? (
        <div className="flex justify-center mt-20 h-3/4">
          <div className="max-w-4xl h-full rounded overflow-hidden shadow-lg flex">
            <div className="w-1/3">
              <Image
                className="w-full"
                width={300}
                height={300}
                src={thumbnail}
                quality={100}
                alt={`image ${title}`}
              />

              <div className="mt-4 grid grid-cols-4 gap-2">
                {images?.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    width={100}
                    height={100}
                    alt={`Product Image ${index}`}
                    className="w-full h-16 object-cover cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>
            <div className="w-2/3 h-full px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">{description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-gray-900">${price}</span>
                <span className="text-sm text-gray-600">
                  Discount: {discountPercentage}%
                </span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-gray-600 mr-1">Rating:</span>
                <div className="Stars" style={{ "--rating": rating }}></div>
                <span className="ml-1">{rating?.toFixed(1)}</span>
              </div>
              <div className="mt-4">
                <span className="text-sm text-gray-600">
                  Available: {stock} in stock
                </span>
              </div>
              <div className="px-4 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {brand}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {category}
                </span>
              </div>
            </div>

            {selectedImage !== null && (
              <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
                <div className="max-w-6xl mx-auto">
                  <Image
                    className="w-full h-full object-contain rounded-xl"
                    height={500}
                    width={500}
                    quality={100}
                    src={images[selectedImage]}
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
