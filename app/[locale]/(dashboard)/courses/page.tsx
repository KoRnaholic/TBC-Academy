import Link from "next/link";
import React from "react";
import CoursesFilter from "../../../../components/courses/CoursesFilter";
import CoursesGrid from "../../../../components/courses/CoursesGrid";
import { getCourses } from "../../../actions";
import { Course } from "../../../../types/types";
import { QueryResultRow } from "@vercel/postgres";
import CourseCategories from "../../../../components/courses/CourseCategories";

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
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center">
        <CoursesGrid courses={courses} />
        <CourseCategories />
      </div>
    </>
  );
}
