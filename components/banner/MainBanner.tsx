import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function MainBanner() {
  const t = useTranslations("Index");
  return (
    <div
      className="w-full bg-cover bg-no-repeat h-screen items-center justify-center bg-center"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/3219549/pexels-photo-3219549.jpeg?auto=compress&cs=tinysrgb&w=3260&h=2750&dpr=1)`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute flex-col gap-8 inset-0 flex items-center justify-center">
        <h1 className="text-[#F28123] font-semibold text-xl tracking-widest font-bolder ">
          {t("banner.name")}
        </h1>
        <h1 className="text-center text-white text-4xl sm:text-5xl ">
          {t("banner.header")}
        </h1>

        <div className="flex flex-col w-full px-8 sm:flex-row sm:w-max  gap-5 text-[#fff]">
          <button className="bg-[#F28123] px-4 py-2 rounded-full hover:bg-[#051922] hover:text-[#F28123] transition duration-300">
            {t("banner.collection")}
          </button>
          <button className="px-4 py-2 rounded-full border-2 border-[#F28123] hover:bg-[#F28123] transition duration-300">
            <Link href="/contact" scroll={false}>
              {t("banner.contact")}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
