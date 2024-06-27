"use client";
import React, { useRef, useState } from "react";
// import FeaturedList from "../main-info/FeaturedList";
import TestCourse from "./TestCourse";
import { Course } from "../../types/types";
import { QueryResultRow } from "@vercel/postgres";
import CourseSearch from "./CourseSearch";
import CourseCategories from "./CourseCategories";
import { CourseTranslate } from "../../app/[locale]/(dashboard)/courses/page";
import CoursesFilter from "./CoursesFilter";

export default function CoursesGrid({
  courses,
  courseTranslate,
}: {
  courses: Course[] | QueryResultRow;
  courseTranslate: CourseTranslate;
}) {
  const [search, setSearch] = useState("");
  const [searchedCourses, setSearchedCourses] = useState(courses);
  const [filterBy, setFilterBy] = useState<string | undefined>();
  // const [filterBy, setFilterBy] = useState("");
  const debounceTimeout = useRef<number | null>(null);

  //Searching with debounce
  const handleSearch = (value: string) => {
    setSearch(value);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = window.setTimeout(() => {
      const currentCourse = courses.filter((course: Course) =>
        course.name.toLowerCase().includes(value.trim().toLowerCase())
      );
      setSearchedCourses(currentCourse);
    }, 500);
  };

  //Filter
  const handleSort = (criteria: string) => {
    if (Array.isArray(searchedCourses)) {
      if (criteria === "new") {
        const sortedById = [...searchedCourses].sort((a, b) => a.id - b.id);
        setSearchedCourses(sortedById);
        setSearch("");
      }
      if (criteria === "old") {
        const sortedByPrice = [...searchedCourses].sort((a, b) => b.id - a.id);
        setSearchedCourses(sortedByPrice);
      }
      if (criteria === "asc") {
        const sortedByName = [...searchedCourses].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setSearchedCourses(sortedByName);
      }
      if (criteria === "desc") {
        const sortedByName = [...searchedCourses].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        setSearchedCourses(sortedByName);
      }
      setFilterBy(criteria);
    }
  };
  return (
    <div className="flex flex-col gap-10">
      <CoursesFilter
        courseTranslate={courseTranslate}
        filterBy={filterBy}
        handleSort={handleSort}
      />
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex flex-wrap px-5  gap-7  justify-center mx-auto lg:mx-0 md:justify-start lg:h-32 w-4/5 sm:w-2/3 md:w-3/5 mb-20">
          {searchedCourses.map((course: Course) => {
            return (
              <TestCourse
                courseTranslate={courseTranslate}
                key={course.id}
                course={course}
              />
            );
          })}
        </div>
        <div className="px-5 ">
          <CourseSearch
            courseTranslate={courseTranslate}
            handleSearch={handleSearch}
            search={search}
          />
          <CourseCategories courseTranslate={courseTranslate} />
        </div>
      </div>
    </div>
  );
}
