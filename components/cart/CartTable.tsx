import React from "react";
import { Course } from "../../types/types";
import SingleCartItem from "./SingleCartItem";
import { getTranslations } from "next-intl/server";

export default async function CartTable({
  courses,
}: {
  courses: Course[] | null;
}) {
  const t = await getTranslations("Cart");
  const removeTransl = {
    remove: t("remove"),
    removing: t("removing"),
  };
  return (
    <div className=" w-full lg:w-1/2  p-4 font-sans">
      <div className="overflow-x-auto  ">
        <table className="min-w-full border dark:border-gray-600 border-gray-200 dark:bg-gray-800">
          <thead className="bg-[#f7f7f7] dark:bg-gray-700">
            <tr>
              <th className="py-5 px-4 border-b text-left font-semibold">
                {t("product")}
              </th>
              <th className="py-5 px-4 border-b text-right font-semibold">
                {t("price")}
              </th>
              <th className="py-5 px-4 border-b text-right font-semibold">
                {t("quantity")}
              </th>
              <th className="py-5 px-4 border-b text-right font-semibold">
                {t("subtotal")}
              </th>
              <th className="py-5 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800">
            {courses?.map((course: Course) => (
              <SingleCartItem
                removeTransl={removeTransl}
                key={course.id}
                course={course}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
