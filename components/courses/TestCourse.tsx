import Image from "next/image";
import SvgBook from "../svg-components/SvgBook";

import SvgTimer from "../svg-components/SvgTimer";
import Link from "next/link";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarsComponent from "../UI/StarsComponent";
import { Course } from "../../types/types";
import { CourseTranslate } from "../../app/[locale]/(dashboard)/courses/page";

export default function TestCourse({
  course,
  courseTranslate,
}: {
  course: Course;
  courseTranslate: CourseTranslate;
}) {
  return (
    <div className="w-full md:max-w-[300px] border dark:border-gray-600 bg-white dark:bg-[#2D2D2D] rounded-lg shadow-md overflow-hidden p-3 group hover:bg-[#4B3869] dark:hover:bg-[#4B3869] transition-all duration-700">
      <div className="">
        <div className="relative">
          <div className="group overflow-hidden">
            <Link href={`/courses/${course.id}`}>
              <Image
                src={course?.image}
                width={300}
                height={300}
                alt="course-1"
                className="w-full h-[182px] rounded-lg object-cover cursor-pointer transform transition-all ease-in-out duration-700 group-hover:scale-110"
              />
            </Link>
          </div>
          <span className="absolute bottom-2 text-2xl right-2 bg-white dark:bg-[#4B3869] text-[#159f46] font-bold px-2.5 py-0.5 rounded-lg">
            {course.price === "free" ? (
              "FREE"
            ) : (
              <span className="text-[#FF6575]">${course.price}</span>
            )}
          </span>
        </div>
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                className="w-9 h-9 rounded-full border-2 border-slate-300"
                src={course.instructor_image}
                alt="avatar"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <p className="text-[#002058] dark:text-[#FF6575] group-hover:text-white">
                  {course.instructor_name + " " + course.instructor_surname}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-white">
                  {courseTranslate.instructor}
                </p>
              </div>
            </div>
            <div>
              <FavoriteBorderIcon className="text-[#FF6575] group-hover:text-white hover:fill-red-500 cursor-pointer" />
            </div>
          </div>
          <h3 className="cursor-pointer mt-4 w-3/4 text-[#002058] dark:text-[#FF6575] text-lg group-hover:text-white hover:text-red-500">
            <Link href={`/courses/${course.id}`}>{course.name}</Link>
          </h3>
          <div className="flex justify-between text-gray-500 dark:text-gray-400 mt-4 text-lg">
            <span className="flex items-center gap-1 group-hover:text-white">
              <span>
                <SvgBook className="fill-[#FF6575] stroke-red group-hover:fill-white group-hover:stroke-white" />
              </span>
              <span>
                {course.lessons} {courseTranslate.lessons}
              </span>
            </span>
            <span className="flex text-sm gap-1 items-center justify-center ml-4 group-hover:text-white">
              <span className="">
                <SvgTimer />
              </span>
              <span className="mt-1 font-thin">{course.duration}</span>
            </span>
          </div>
        </div>
        <div className="pt-4 flex justify-between items-center border-t dark:border-gray-700">
          <div className="text-gray-900 dark:text-gray-400 font-sans flex items-center gap-1 group-hover:text-white">
            <StarsComponent rating={course.rating} />
            {course.rating}
          </div>
          <button className="py-1.5 px-3.5 border-2 border-[#B4A7F5] dark:border-[#FF6575] rounded-full text-[#B4A7F5] dark:text-[#FF6575] hover:bg-[#B4A7F5] dark:hover:bg-[#FF6575] hover:text-white transition-all duration-300 hover:border-[#B4A7F5] dark:hover:border-[#FF6575] group-hover:text-white">
            <Link href={`/courses/${course.id}`}>{courseTranslate.view}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
