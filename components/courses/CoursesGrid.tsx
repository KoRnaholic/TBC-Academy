import React from "react";
import FeaturedList from "../main-info/FeaturedList";
import TestCourse from "./TestCourse";

export default function CoursesGrid({ courses }) {
  return (
    <div className="flex flex-wrap  gap-7 h-[900px] justify-center md:justify-start p-3 mt-14 w-full md:w-3/5">
      {courses.map((course, idx) => {
        return <TestCourse key={idx} course={course} />;
      })}
    </div>
  );
}
