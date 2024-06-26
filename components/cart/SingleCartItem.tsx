import React from "react";
import { sqlDeleteFromCart } from "../../app/sql/sqlDeleteFromCart";
import Image from "next/image";
import { Course } from "../../types/types";
import RemoveButton from "./RemoveButton";

export interface RemoveTransl {
  remove: string;
  removing: string;
}

import {
  sqlDecrementQuantity,
  sqlIncrementQuantity,
} from "../../app/sql/sqlRequests";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

export default function SingleCartItem({
  course,
  removeTransl,
}: {
  course: Course;
  removeTransl: RemoveTransl;
}) {
  const removeFromCart = sqlDeleteFromCart.bind(null, course.id);
  const incrementQuantity = sqlIncrementQuantity.bind(
    null,
    course.student_id,
    course.id
  );
  const decrementQuantity = sqlDecrementQuantity.bind(
    null,
    course.student_id,
    course.id
  );

  return (
    <tr key={course.id} className="py-10">
      <td className="py-1 px-1 sm:py-5 sm:px-4  flex items-center">
        <Image
          src={course.image}
          width={200}
          height={200}
          alt="Product Image"
          className=" object-cover mr-4 rounded-md"
        />
        <span className="hidden md:flex">{course.name}</span>
      </td>
      <td className="py-5 px-4  text-center">${course.price}</td>
      <td className="py-5 px-2  text-center ">
        <DecrementButton decrementQuantity={decrementQuantity} />
        <span className="text-lg ">{course.quantity}</span>
        <IncrementButton incrementQuantity={incrementQuantity} />
      </td>
      <td className="py-5 px-4  text-center">
        ${course.quantity * Number(course.price)}
      </td>
      <td className="py-5 px-4  text-right ">
        <form action={removeFromCart}>
          <RemoveButton removeTransl={removeTransl} />
        </form>
      </td>
    </tr>
  );
}
