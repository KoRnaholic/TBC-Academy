"use client";
import React, { useRef, useState } from "react";
// import FeaturedList from "../main-info/FeaturedList";
import TestCourse from "./TestCourse";
import { Course } from "../../types/types";
import { QueryResultRow } from "@vercel/postgres";
import CourseSearch from "./CourseSearch";
import CourseCategories from "./CourseCategories";

export default function CoursesGrid({
  courses,
}: {
  courses: Course[] | QueryResultRow;
}) {
  const [search, setSearch] = useState("");
  const [searchedCourses, setSearchedCourses] = useState(courses);
  const [filterBy, setFilterBy] = useState("");
  const debounceTimeout = useRef<number | null>(null);

  //Searching with debounce
  const handleSearch = (value: string) => {
    setSearch(value);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = window.setTimeout(() => {
      const currentProduct = courses.filter((course) =>
        course.name.toLowerCase().includes(value.trim().toLowerCase())
      );
      setSearchedCourses(currentProduct);
    }, 500);
  };

  //Filter
  const handleSort = (criteria: string) => {
    if (criteria === "input") {
      const sortedById = [...courses].sort((a, b) => a.id - b.id);
      setSearchedCourses(sortedById);
      setSearch("");
    }
    if (criteria === "price") {
      const sortedByPrice = [...courses].sort((a, b) => a.price - b.price);
      setSearchedCourses(sortedByPrice);
    }
    if (criteria === "name") {
      const sortedByName = [...courses].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setSearchedCourses(sortedByName);
    }
    setFilterBy(criteria);
  };
  return (
    <>
      <div className="flex flex-wrap  gap-7  justify-center md:justify-start  w-full md:w-3/5">
        {searchedCourses.map((course: Course) => {
          return <TestCourse key={course.id} course={course} />;
        })}
      </div>
      <div>
        <CourseSearch handleSearch={handleSearch} search={search} />
        <CourseCategories />
      </div>
    </>
  );
}
