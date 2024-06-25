import React from "react";
import { sqlGetUserPurchases } from "../../../../sql/sql-purchases/sqlGetUserPurchases";
import Link from "next/link";
import Image from "next/image";
import SvgTimer from "../../../../../components/svg-components/SvgTimer";
import SvgBook from "../../../../../components/svg-components/SvgBook";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemovePurchaseModal from "../../../../../components/UI/modals/RemovePurchaseModal";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "DreamLMS - My Courses",
  description:
    "Access and manage your enrolled courses on DreamLMS to continue your learning journey.",
  keywords:
    "my courses, enrolled courses, learning journey, DreamLMS, online learning, education",
};

export const revalidate = 0;

export default async function MyCoursesPage() {
  const purchases = await sqlGetUserPurchases();
  const t = await getTranslations("Profile.courses");

  const courseTranslation = {
    remove: t("remove"),
    sure: t("sure"),
    close: t("close"),
    delete: t("delete"),
    deleting: t("deleting"),
  };
  return (
    <>
      <h1 className="text-3xl mt-5">{t("purchased")}</h1>
      <div className="mt-5 flex gap-5">
        {purchases?.map((course) => {
          const date = new Date(course.purchase_date);

          const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
          };
          const formattedDate = date.toLocaleString("en-US", options);
          return (
            <div
              key={course.id}
              className="w-[600px] md:max-w-[300px]  border dark:border-gray-500 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-3 group hover:bg-[#4B3869] transition-all duration-700"
            >
              <div className="">
                <div className="relative">
                  <div className="group overflow-hidden">
                    <Link href={`/courses/${course.id}`}>
                      <Image
                        src={course?.image}
                        width={300}
                        height={300}
                        alt="course-1"
                        className="w-full h-[182px] rounded-lg object-cover cursor-pointer transform transition-all ease-in-out  duration-700 group-hover:scale-110"
                      />
                    </Link>
                  </div>
                  <span className="absolute bottom-2 text-2xl right-2 bg-white text-[#159f46]  font-bold px-2.5 py-0.5 rounded-lg">
                    {course.price === "free" ? (
                      "FREE"
                    ) : (
                      <span className="text-[#FF6575]">${course.price}</span>
                    )}
                  </span>
                </div>
                <div className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col ">
                        <p className="text-[#002058] dark:text-white group-hover:text-white">
                          Date: {formattedDate}
                        </p>
                      </div>
                    </div>
                    <div>
                      <FavoriteBorderIcon className="text-[#FF6575] dark:text-white hover:fill-red-500 cursor-pointer" />
                    </div>
                  </div>
                  <h3 className="cursor-pointer h-10 mt-4 w-3/4  text-[#002058] dark:text-white text-lg group-hover:text-white hover:text-red-500">
                    {course.name.slice(0, 25)}...
                  </h3>
                  <div className="flex justify-between text-gray-500 dark:text-gray-300 mt-4 text-lg ">
                    <span className="flex items-center gap-1 group-hover:text-white">
                      <span>
                        <SvgBook className="fill-[#FF6575] dark:fill-white stroke-red group-hover:fill-white group-hover:stroke-white" />
                      </span>
                      <span>
                        {course.lessons} {t("lessons")}
                      </span>
                    </span>
                    <span className="flex text-sm gap-1 items-center justify-center ml-4 group-hover:text-white">
                      <span className="">
                        <SvgTimer />
                      </span>
                      <span className="mt-1 font-thin">{course.duration}</span>
                    </span>
                  </div>
                </div>
                <div className="pt-4 flex justify-center items-center border-t">
                  <RemovePurchaseModal
                    courseTranslation={courseTranslation}
                    courseId={course.id}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
