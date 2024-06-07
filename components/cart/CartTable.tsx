import React from "react";
import { Course } from "../../types/types";
import SingleCartItem from "./SingleCartItem";

export default async function CartTable({
  courses,
}: {
  courses: Course[] | null;
}) {
  return (
    <div className=" w-full lg:w-1/2  p-4 font-sans">
      <div className="overflow-x-auto ">
        <table className="min-w-full  border  border-gray-200">
          <thead className="bg-[#f7f7f7]">
            <tr>
              <th className="py-5 px-4 border-b text-left  font-semibold">
                Product
              </th>
              <th className="py-5 px-4 border-b text-right font-semibold">
                Price
              </th>
              <th className="py-5 px-4 border-b text-right font-semibold">
                Quantity
              </th>
              <th className="py-5 px-4 border-b text-right font-semibold">
                Subtotal
              </th>
              <th className="py-5 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {courses?.map((course: Course) => (
              <SingleCartItem key={course.id} course={course} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
