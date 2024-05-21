"use client";
import Image from "next/image";
import React, { useOptimistic } from "react";

import Increment from "./Increment";

export default function CheckoutList({ products }) {
  return (
    <>
      {products.map((product: any, idx: number) => {
        return (
          <tr key={idx}>
            <td className=" px-2 md:px-6 py-4 whitespace-nowrap">
              <Image
                className="w-full"
                src={product.product_image}
                width={500}
                height={300}
                alt="product"
              />
            </td>
            <td className=" px-2 md:px-6 py-4 whitespace-nowrap">
              {product.brand}
            </td>
            <td className=" px-2 md:px-6 py-4 whitespace-nowrap">
              {product.price}$
            </td>
            <td className="px-2 md:px-6 py-4 whitespace-nowrap text-center">
              <Increment product={product} />
            </td>
          </tr>
        );
      })}
    </>
  );
}
