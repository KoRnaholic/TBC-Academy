import React from "react";
import { sqlDeleteFromCart } from "../../app/sql/sqlDeleteFromCart";
import Image from "next/image";

export default function SingleCartItem({ course }) {
  const removeFromCart = sqlDeleteFromCart.bind(null, course.id);
  return (
    <tr key={course.id} className="py-10">
      <td className="py-5 w-1/2l px-4 border-b flex items-center">
        <Image
          src={course.image}
          width={200}
          height={200}
          alt="Product Image"
          className="w-36 h-28 object-cover mr-4"
        />
        <span>{course.name}</span>
      </td>
      <td className="py-5 px-4 border-b text-right">${course.price}</td>
      <td className="py-5 px-4 border-b text-right">
        <input
          type="number"
          min="1"
          //   value="1"
          className="w-12 border border-gray-300 rounded text-center"
        />
      </td>
      <td className="py-5 px-4 border-b text-right">$</td>
      <td className="py-5 px-4 border-b text-right">
        <form action={removeFromCart}>
          <button
            className="text-[#FF6575] border font-semibold border-[#FF6575]
         px-3 py-1 rounded hover:bg-[#ec5362] hover:text-white transition-all duration-300"
          >
            Remove
          </button>
        </form>
      </td>
    </tr>
  );
}
