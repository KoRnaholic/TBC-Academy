import Image from "next/image";
import girlImg from "../../public/images/about-img.png";
import { useTranslations } from "next-intl";

export default function AboutCompany() {
  const t = useTranslations("Aboutus.company");

  const textChunks = [
    t("text").slice(0, 181),
    t("text").slice(181, 360),
    t("text").slice(360, 540),
    t("text").slice(540),
  ];
  return (
    <div className="pt-8 mt-14 flex-col lg:flex-row flex justify-center">
      <div className="px-5">
        <h2 className="text-[#FF6575] text-xl font-semibold mb-6">
          {t("about")}
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-300 mb-6">
          {t("header")}
        </h1>
        <div className="space-y-4 text-gray-500 dark:text-gray-300 font-regular">
          {textChunks.map((chunk, index) => (
            <p key={index} className="max-w-[800px] mt-4">
              {chunk}
            </p>
          ))}
        </div>
      </div>

      <div>
        <Image
          src={girlImg}
          alt="girl-image"
          width={530}
          loading="lazy"
          height={500}
          placeholder="blur"
        />
      </div>
    </div>
  );
}
