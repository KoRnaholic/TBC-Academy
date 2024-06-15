import Image from "next/image";

import CourseCard from "./CourseCard";
import { Course } from "../../types/types";
import { QueryResultRow } from "@vercel/postgres";
import CourseComment from "./AddCourseComment";

export default function Overview({
  course,
}: {
  course: Course | QueryResultRow;
}) {
  return (
    <div className="flex flex-col xl:flex-row justify-center gap-10 bg-[#fafafa] pb-10">
      <div className="flex flex-col gap-8 mt-20">
        <div className="p-5 border rounded-lg bg-white">
          <h2 className="text-2xl text-[#002058]">Overview</h2>
          <p className="max-w-[800px] text-gray-500 mt-5">{course.overview}</p>
        </div>

        <div className="p-5 border rounded-lg bg-white">
          <h2 className="text-2xl text-[#002058]">Course Content</h2>
        </div>

        <div className="p-5 border rounded-lg bg-white">
          <h2 className="text-2xl text-[#002058]">About Instructor</h2>

          <div className="flex gap-2 items-center justify-between mt-5">
            <div className="flex gap-3 items-center">
              <Image
                className="w-15 h-15 rounded-full border-2 border-slate-300"
                src="https://dreamslms-wp.dreamstechnologies.com/wp-content/uploads/2024/02/profile5-1.jpg"
                alt="avatar"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <span className="text-[#002058]">Michael Morgan</span>
                <span>Instructor</span>
              </div>
            </div>
            <div>stars</div>
          </div>
          <div className="flex gap-6 mt-5 text-lg border-y p-4 ">
            <span className="flex items-center">6 Students</span>
            <span className="flex items-center">11 Courses</span>
            <span>45 Reviews</span>
          </div>

          <div className="mt-5">
            <p className="max-w-[800px] text-gray-500">
              Very well thought out and articulate communication. Clear
              milestones, deadlines and fast work. Patience. Infinite patience.
              No shortcuts. Even if the client is being careless. Some quick
              example text to build on the card title and bulk the card&apos;s
              content Moltin gives you platform. As a highly skilled and
              successfull product development and design specialist with more
              than 4 Years of My experience lies in successfully
              conceptualizing, designing, and modifying consumer products
              specific to interior design and home furnishings.
            </p>
          </div>
          <div className="mt-5">
            <button className="text-white bg-[#FF6575] px-5 py-2.5 rounded-lg hover:bg-[#ec5362] transition-all duration-300">
              View Details
            </button>
          </div>
        </div>

        <div className="p-5 border rounded-lg bg-white">
          <h2 className="text-2xl text-[#002058]">Reviews</h2>
          <div className="flex justify-between gap-3 items-center mt-5">
            <div className="flex gap-3">
              <Image
                className="w-15 h-15 rounded-full border-2 border-slate-300"
                src="https://dreamslms-wp.dreamstechnologies.com/wp-content/uploads/2024/02/profile5-1.jpg"
                alt="avatar"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <span className="text-[#002058]">Michael Morgan</span>
                <span>15 hours ago</span>
              </div>
            </div>
            <span>stars</span>
            <span>Comments</span>
          </div>
        </div>
        <CourseComment id={course.id} />
      </div>

      <div className=" xl:-mt-52 sticky">
        <CourseCard course={course} />
      </div>
    </div>
  );
}
