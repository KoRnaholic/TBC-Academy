import React from "react";
// import FeaturedList from "../main-info/FeaturedList";
import TestCourse from "./TestCourse";
import { Course } from "../../types/types";
import { QueryResultRow } from "@vercel/postgres";

export default function CoursesGrid({
  courses,
}: {
  courses: Course[] | QueryResultRow;
}) {
  return (
    <div className="flex flex-wrap  gap-7 h-[900px] justify-center md:justify-start p-3 mt-14 w-full md:w-3/5">
      {courses.map((course: Course) => {
        return <TestCourse key={course.id} course={course} />;
      })}
    </div>
  );
}
