import Link from "next/link";
import React from "react";
import { Course } from "../../types/types";

export default function CartTotal({
  totalPrice,
  course,
}: {
  totalPrice: number | undefined;
  course: Course;
}) {
  return (
    <div className="mt-4 w-full h-1/2 mx-auto lg:mx-0 max-w-sm  bg-white shadow-lg rounded-lg border border-gray-200 p-6">
      <h2 className="text-xl font-thin pb-3 text-[#111e6c] mb-4 border-b w-full">
        Cart totals
      </h2>
      <div className="flex justify-between border-b border-gray-200 py-2">
        <span className="text-gray-700">Subtotal</span>
        <span className="text-gray-700">${totalPrice}</span>
      </div>
      <div className="flex justify-between border-b border-gray-200 py-2 mt-2">
        <span className="text-gray-700">Total</span>
        <span className="text-gray-700">${totalPrice}</span>
      </div>

      {course && (
        <div className="flex justify-center">
          <Link
            className="mt-10 text-center mx-auto w-full font-thin bg-[#FF6575] text-lg text-white  py-3 px-4 rounded hover:bg-[#ec5362] transition-all duration-300"
            href={`/cart/checkout/${course?.name}`}
          >
            Proceed To Checkout
          </Link>
        </div>
      )}
    </div>
  );
}
