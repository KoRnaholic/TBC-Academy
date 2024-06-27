import Link from "next/link";
import React from "react";
import CoursesGrid from "../../../../components/courses/CoursesGrid";
import { getCourses } from "../../../actions";
import { Course } from "../../../../types/types";
import { QueryResultRow } from "@vercel/postgres";
import { getTranslations } from "next-intl/server";

export const revalidate = 0;

export const metadata = {
  title: "DreamLMS - All Courses",
  description:
    "Browse through a wide range of courses to enhance your learning experience on DreamLMS.",
  keywords: "courses, find courses, online learning, education, DreamLMS",
};

export interface CourseTranslate {
  search: string;
  category: string;
  level: string;
  tags: string;
  price: string;
  view: string;
  instructor: string;
  lessons: string;
  new: string;
  old: string;
  az: string;
  za: string;
}

export default async function CoursesPage() {
  const courses: Course[] | QueryResultRow[] = await getCourses();
  const t = await getTranslations("Courses");

  const courseTranslate = {
    search: t("search"),
    category: t("category"),
    level: t("level"),
    tags: t("tags"),
    price: t("price"),
    view: t("view"),
    instructor: t("instructor"),
    lessons: t("lessons"),
    new: t("new"),
    old: t("old"),
    az: t("az"),
    za: t("za"),
  };

  return (
    <>
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

      <div className="mb-20">
        <CoursesGrid courseTranslate={courseTranslate} courses={courses} />
      </div>
    </>
  );
}
