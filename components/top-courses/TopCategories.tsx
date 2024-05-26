import React from "react";
import TopCourses from "./TopCourses";

export default function TopCategories() {
  return (
    <>
      <div className="my-20 flex flex-col md:flex-row justify-around px-16 gap-4  items-center">
        <div className="flex flex-col gap-4">
          <span className="text-[#FF6575] tracking-wider font-bold text-lg">
            Favourite Course
          </span>
          <h2 className="text-4xl font-bold text-[#002058] tracking-wider">
            Top Category
          </h2>
          <p className="max-w-[700px] text-[#685f78] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </p>
        </div>
        <div>
          <button
            className="py-2.5 px-5 border-4 border-[#B4A7F5] rounded-full
           text-[#B4A7F5] hover:bg-[#B4A7F5] hover:text-white
            transition-all duration-300 hover:border-[#B4A7F5]"
          >
            All Categories
          </button>
        </div>
      </div>
      <TopCourses />
    </>
  );
}
