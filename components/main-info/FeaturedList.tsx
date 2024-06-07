import Image from "next/image";
import SvgBook from "../svg-components/SvgBook";
import SvgTimer from "../svg-components/SvgTimer";
import Link from "next/link";
import { Course } from "../../types/types";
import { QueryResultRow } from "@vercel/postgres";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarsComponent from "../UI/StarsComponent";

export default function FeaturedList({
  course,
}: {
  course: Course | QueryResultRow;
}) {
  return (
    <div className="max-w-[395px]  bg-white rounded-lg shadow-md overflow-hidden p-5 group hover:bg-[#4B3869] transition-all duration-700">
      <div className="">
        <div className="relative">
          <div className="group overflow-hidden">
            <Link href={`/courses/${course.id}`}>
              <Image
                src={course?.image}
                width={300}
                height={300}
                alt="course-1"
                className="w-full h-full rounded-lg object-cover cursor-pointer transform transition-all ease-in-out  duration-700 group-hover:scale-110"
              />
            </Link>
          </div>
          <span className="absolute bottom-2 text-2xl right-2 bg-white text-[#159f46]  font-bold px-2.5 py-0.5 rounded-lg">
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
                src="https://dreamslms-wp.dreamstechnologies.com/wp-content/uploads/2024/02/profile5-1.jpg"
                alt="avatar"
                width={50}
                height={50}
              />
              <div className="flex flex-col ">
                <p className="text-[#002058] group-hover:text-white ">
                  {course.instructor_name + " " + course.instructor_surname}
                </p>
                <p className="text-gray-600 text-sm group-hover:text-white ">
                  Instructor
                </p>
              </div>
            </div>
            <div>
              <FavoriteBorderIcon className="text-[#FF6575] group-hover:text-white hover:fill-red-500 cursor-pointer" />
              {/* <SvgHeart className="fill-white stroke-red  group-hover:fill-[#4B3869] group-hover:stroke-white" /> */}
            </div>
          </div>
          <h3
            className="cursor-pointer mt-4 w-4/5  text-[#002058] text-lg
           group-hover:text-white"
          >
            {course.name}
          </h3>
          <div className="flex justify-between text-gray-500  mt-4 text-lg ">
            <span className="flex items-center group-hover:text-white">
              <span>
                <SvgBook className="fill-[#FF6575] stroke-red group-hover:fill-white group-hover:stroke-white" />
              </span>
              <span className="font-thin">{course.lessons} Lessons</span>
            </span>
            <span className="flex text-sm gap-1 items-center justify-center ml-4 group-hover:text-white">
              <span className="">
                <SvgTimer />
              </span>
              <span className="mt-1 font-thin">{course.duration}</span>
            </span>
          </div>
        </div>
        <div className="pt-4 flex justify-between items-center border-t">
          <div className="text-gray-900  font-sans flex items-center gap-1 group-hover:text-white">
            <StarsComponent rating={course.rating} />
            {course.rating}
          </div>
          <button
            className="py-1.5 px-3.5 border-2 border-[#B4A7F5] rounded-full
           text-[#B4A7F5] hover:bg-[#B4A7F5] hover:text-white
            transition-all duration-300 hover:border-[#B4A7F5]
             group-hover:text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
