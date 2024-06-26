import Link from "next/link";
import React from "react";
import { sqlGetCartItems } from "../../../sql/sqlGetCartItems";

import CartTable from "../../../../components/cart/CartTable";
import CartTotal from "../../../../components/cart/CartTotal";
import { getTranslations } from "next-intl/server";

export default async function CartPage() {
  const courses = await sqlGetCartItems();

  const t = await getTranslations("Cart");

  const totalPrice = courses?.reduce((sum, course) => {
    return sum + course.quantity * parseFloat(course.price);
  }, 0);

  return (
    <div className="bg-[#fafafa] dark:bg-[#1A1A1A]">
      <div>
        <div
          className="mt-20 w-full h-[190px] relative bg-center bg-no-repeat bg-cover pt-12 "
          style={{
            backgroundImage: "url('/images/bg-about.png')",
            backgroundColor: "rgba(250, 246, 246, .9)",
          }}
        >
          <div className="flex flex-col  gap-3 items-center justify-center">
            <h1 className="text-5xl text-[#002058]">{t("link")}</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                {t("home")}
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]">{t("link")}</span>
            </div>
          </div>
        </div>
      </div>

      {courses && !courses[0] ? (
        <div>{/* <Image /> */}</div>
      ) : (
        <div className="mt-16 flex flex-col lg:flex-row justify-center   gap-3">
          <CartTable courses={courses} />
          {courses && <CartTotal course={courses[0]} totalPrice={totalPrice} />}
        </div>
      )}
    </div>
  );
}
