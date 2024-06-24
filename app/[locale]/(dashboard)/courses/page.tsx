import Link from "next/link";
import React from "react";
import CoursesFilter from "../../../../components/courses/CoursesFilter";
import CoursesGrid from "../../../../components/courses/CoursesGrid";
import { getCourses } from "../../../actions";
import { Course } from "../../../../types/types";
import { QueryResultRow } from "@vercel/postgres";

export const revalidate = 0;

export const metadata = {
  title: "DreamLMS - All Courses",
  description:
    "Browse through a wide range of courses to enhance your learning experience on DreamLMS.",
  keywords: "courses, find courses, online learning, education, DreamLMS",
};

export default async function CoursesPage() {
  const courses: Course[] | QueryResultRow[] = await getCourses();

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
            <h1 className="text-5xl text-[#002058]">Courses</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                Home
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]">Courses</span>
            </div>
          </div>
        </div>
      </div>

      <CoursesFilter />
      <div className="mt-14 flex flex-col md:flex-row  items-center md:items-start md:justify-center mb-20">
        <CoursesGrid courses={courses} />
      </div>
    </>
  );
}
