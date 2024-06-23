import { useTranslations } from "next-intl";
import TopCourses from "./TopCourses";

export default function TopCategories() {
  const t = useTranslations("Index.favourite");
  return (
    <>
      <div className="mt-20 mb-5 flex flex-col md:flex-row justify-around px-16 gap-4 items-center">
        <div className="flex flex-col gap-4">
          <span className="text-[#FF6575]  tracking-wider font-bold text-lg">
            {t("courses")}
          </span>
          <h2 className="text-4xl font-bold text-[#002058] dark:text-[#F8F8F2] tracking-wider">
            {t("top")}
          </h2>
          <p className="max-w-[700px] text-[#685f78] dark:text-[#B4A7F5]">
            {t("text")}
          </p>
        </div>
        <div>
          <button className="py-2.5 px-5 border-4 border-[#B4A7F5]  rounded-full text-[#B4A7F5]  hover:bg-[#B4A7F5]  hover:text-white transition-all duration-300 hover:border-[#B4A7F5] ">
            All Categories
          </button>
        </div>
      </div>

      <TopCourses />
    </>
  );
}
