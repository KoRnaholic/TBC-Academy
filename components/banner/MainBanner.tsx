import { useTranslations } from "next-intl";
import Image from "next/image";

import React from "react";
import girlImage from "../../public/images/girl-image.png";
import MainInfo from "../main-info/MainInfo";

export default function MainBanner() {
  const t = useTranslations("Index");
  console.log(t);
  return (
    <>
      <div
        className=" w-full  h-[800px] relative bg-center bg-no-repeat bg-cover pt-20 md:pt-52 md:pb-36"
        style={{ backgroundImage: "url('/images/learning-banner.png')" }}
      >
        <div className="flex flex-col md:flex-row justify-center md:gap-40 items-start">
          <div className="flex flex-col gap-12">
            <h1 className="text-2xl text-[#685F78]">
              The Leader in Online Learning
            </h1>
            <h2 className="text-2xl md:text-5xl  font-sans font-bold max-w-[500px] text-[#002058]">
              Engaging & Accessible Online Courses For All
            </h2>
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                className="w-full pl-12 pr-12 py-4 rounded-full border-none focus:ring-0 text-gray-700 placeholder-gray-400 bg-white shadow-md"
                placeholder="Search School, Online educational centers, etc"
              />

              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition duration-300"></button>
            </div>
            <p className="text-lg">
              Trusted by over 15K Users worldwide since 2022
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              // className="w-[520px] h-[533px]"
              className="w-4/5 "
              src={girlImage}
              alt="girl-image"
              quality={100}
            />
          </div>
        </div>
      </div>
      <MainInfo />
    </>
  );
}

{
  /* <div
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
    </div> */
}
