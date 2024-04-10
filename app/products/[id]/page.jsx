"use client";

import Button from "@/components/UI/Button";
import ProductCard from "@/components/products/ProductCard";
import Image from "next/image";
import { useEffect, useState } from "react";
const URL = "https://dummyjson.com/products";

export default function Products({ params }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${URL}/${params.id}`);
      const data = await response.json();
      setProduct(data);
      console.log(data);
    };

    fetchProducts();
  }, [params.id, setProduct]);
  return (
    <>
      <div
        className=" h-full mx-auto bg-slate-50 dark:bg-slate-300   transition ease-in-out delay-0
          hover:-translate-y-1 hover:scale-105 duration-300"
      >
        {/* <div className="flex flex-wrap">
          {product.images.map((image) => {
            return (
              <Image
                key={image}
                className="w-full  object-cover object-center"
                src={image}
                alt="product"
                width={400}
                height={400}
                priority
              />
            );
          })}
        </div> */}
        <Image
          className="w-full  object-cover object-center"
          src={product.thumbnail}
          alt="product"
          width={400}
          height={400}
          priority
        />
        <div className="p-4">
          <h2 className="text-gray-900 font-bold text-xl mb-2">
            {product.title}
          </h2>
          <p className="text-gray-700 text-base">{product.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-gray-900 font-bold">${product.price}</span>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    </>
  );
}
