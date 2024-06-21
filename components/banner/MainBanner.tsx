// import { useTranslations } from "next-intl";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import React from "react";
import girlImage from "../../public/images/girl-image.png";
import MainInfo from "../main-info/MainInfo";
import { useTranslations } from "next-intl";

export default function MainBanner() {
  const t = useTranslations("Index.mainbanner");

  return (
    <>
      <div
        className="w-full h-[800px] relative bg-center bg-no-repeat bg-cover pt-20 md:pt-52 md:pb-36"
        style={{ backgroundImage: "url('/images/error/error-bg.png')" }}
      >
        <div className="flex mt-10 lg:mt-0 flex-col gap-5 md:flex-row justify-center  xl:gap-40 items-start">
          <div className="flex flex-col mx-auto md:mx-0 gap-8 lg:gap-12 px-5">
            <h1 className="text-2xl text-[#685F78]">{t("leader")}</h1>
            <h2 className="text-3xl lg:text-5xl lg:leading-snug  font-sans font-bold max-w-[500px] text-[#002058]">
              {t("engaging")}
            </h2>
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                className="w-full pl-12 pr-12 py-4 rounded-full border-none focus:ring-0 text-gray-700 placeholder-gray-400 bg-white shadow-md"
                placeholder={`${t("search")}`}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF6575] text-white p-3 rounded-full hover:bg-[#fa5566] transition duration-300">
                <ArrowForwardIcon />
              </button>
            </div>
            <p className="text-lg">{t("trusted")}</p>
          </div>
          <div className="flex justify-center mx-auto lg:mx-0">
            <Image
              className="w-2/3 lg:w-4/5 girl-image"
              src={girlImage}
              alt="girl-image"
              quality={70}
              width={520} // specify the width
              height={533} // specify the height
              // placeholder="blur"
              // loading="lazy"
              priority
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
