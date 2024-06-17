import { QueryResultRow } from "@vercel/postgres";
import { Course } from "../../types/types";
import FeaturedList from "./FeaturedList";

export default function FeaturedCourses({
  courses,
}: {
  courses: Course[] | QueryResultRow[];
}) {
  console.log(courses);
  return (
    <section
      className=" w-full h-[1400px] relative bg-center bg-no-repeat bg-cover pt-52 pb-36"
      style={{ backgroundImage: "url('/images/error/error-bg.png')" }}
    >
      <div
        className="absolute  top-2 -mt-2 left-0 w-full h-[700px]"
        style={{ backgroundImage: "url('/images/bg-arrow.png')" }}
      >
        <div className=" flex flex-col md:flex-row justify-around px-5 sm:px-28 gap-4  items-center z-30">
          <div className="flex flex-col gap-4 mt-20">
            <span className="text-[#FF6575] tracking-wider font-bold text-lg">
              What’s New
            </span>
            <h2 className="text-4xl font-bold text-[#002058] tracking-wider">
              Featured Courses
            </h2>
            <p className="max-w-[700px] text-[#685f78] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
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

        <div className="mt-14 flex flex-wrap gap-10 px-4 sm:px-28 justify-center">
          {courses?.slice(0, 6).map((course, indx) => {
            return <FeaturedList course={course} key={indx} />;
          })}
        </div>
      </div>
    </section>
  );
}
