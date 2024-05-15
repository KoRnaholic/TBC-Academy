"use client";

import Image from "next/image";
import { useEffect, useReducer, useState } from "react";
import { useCart } from "../../../../components/contexts/CartContext";

export default function CheckoutPage() {
  const { addToCart, removeFromCart, products } = useCart();

  return (
    <>
      <div>
        <div className="bg-[#07212e] flex items-center justify-center h-[450px]">
          <div className="flex-col gap-8  flex ">
            <h1 className="text-[#F28123] text-center tracking-widest text-xl">
              WE DELIVER TECH DREAMS
            </h1>
            <h1 className="text-center text-white text-4xl sm:text-5xl ">
              Check Out Product
            </h1>
          </div>
        </div>

        <div className="flex justify-center py-20">
          <table className="w-full md:w-1/2 sm:w-2/3 lg:w-1/3">
            <thead className="bg-orange-500">
              <tr>
                <th className=" px-2 md:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Product image
                </th>
                <th className=" px-2 md:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Brand
                </th>
                <th className=" px-2 md:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Price
                </th>
                <th className=" px-2 md:px-6 pr-0 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y text-orange-400 divide-gray-200">
              {products.map((product: any, idx) => {
                // console.log(state);
                return (
                  <tr key={idx}>
                    <td className=" px-2 md:px-6 py-4 whitespace-nowrap">
                      <Image
                        className="w-full"
                        src={product.product.thumbnail}
                        width={500}
                        height={300}
                        alt="product"
                      />
                    </td>
                    <td className=" px-2 md:px-6 py-4 whitespace-nowrap">
                      {product.product.title}
                    </td>
                    <td className=" px-2 md:px-6 py-4 whitespace-nowrap">
                      {product.product.price}$
                    </td>
                    <td className="mt-3 px-2 md:px-6 py-4  whitespace-nowrap flex items-center justify-center gap-2">
                      <p
                        className="cursor-pointer"
                        onClick={() => removeFromCart(product)}
                      >
                        -
                      </p>

                      {product.quantity}
                      <p
                        className="cursor-pointer"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
