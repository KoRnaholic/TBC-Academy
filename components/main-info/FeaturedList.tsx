import Image from "next/image";
import SvgBook from "../svg-components/SvgBook";
import SvgTimer from "../svg-components/SvgTimer";
import Link from "next/link";
import { Course } from "../../types/types";
import { QueryResultRow } from "@vercel/postgres";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarsComponent from "../UI/StarsComponent";
import { sqlgetReviewRatings } from "../../app/sql/sql-review/sqlGetReviewRatings";
import { sqlSubExists } from "../../app/sql/sql-subscription/sqlSubExists";

export default async function FeaturedList({
  course,
}: {
  course: Course | QueryResultRow;
}) {
  const rating = await sqlgetReviewRatings(course.id);
  const data = await sqlSubExists();

  return (
    <div className="w-[395px] bg-white dark:bg-[#2D2D2D] rounded-lg shadow-md overflow-hidden p-5 group dark:hover:bg-[#4B3869] hover:bg-[#4B3869] transition-all duration-700">
      <div className="w-full">
        <div className="relative">
          <div className="group overflow-hidden">
            <Link href={`/courses/${course.id}`}>
              <Image
                src={`${course.image}`}
                width={300}
                height={300}
                alt="course-1"
                className="w-full max-h-[236px] rounded-lg object-cover cursor-pointer transform transition-all ease-in-out duration-700 group-hover:scale-110"
              />
            </Link>
          </div>

          {data?.exists ? (
            <span className="absolute bottom-2 text-2xl right-2 bg-white dark:bg-[#4B3869] text-[#159f46] font-bold px-2.5 py-0.5 rounded-lg">
              FREE
            </span>
          ) : (
            <span className="absolute bottom-2 text-2xl right-2 bg-white dark:bg-[#4B3869] text-[#159f46] font-bold px-2.5 py-0.5 rounded-lg">
              {course.price === "free" ? (
                "FREE"
              ) : (
                <span className="text-[#FF6575]">${course.price}</span>
              )}
            </span>
          )}
        </div>
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <p className="text-[#002058] dark:text-[#FF6575] group-hover:text-white">
                  {course.instructor_name + " " + course.instructor_surname}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-white">
                  Instructor
                </p>
              </div>
            </div>
            <div>
              <FavoriteBorderIcon className="text-[#FF6575] group-hover:text-white hover:fill-red-500 cursor-pointer" />
            </div>
          </div>
          <p className="cursor-pointer mt-4 w-4/5 text-[#002058] dark:text-[#FF6575] text-lg h-10 group-hover:text-white">
            <Link href={`/courses/${course.id}`}>{course.name}</Link>
          </p>
          <div className="flex justify-between text-gray-500 dark:text-gray-400 mt-4 text-lg">
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
        <div className="pt-4 flex justify-between items-center border-t dark:border-gray-700">
          <div className="text-gray-900 dark:text-gray-400 font-sans flex items-center gap-1 group-hover:text-white">
            {rating?.average_rating ? (
              <div className="font-bold">
                <StarsComponent rating={rating?.average_rating} />
                {rating?.average_rating}
              </div>
            ) : (
              <span>No reviews Yet</span>
            )}
          </div>
          <button className="py-1.5 px-3.5 border-2 border-[#B4A7F5] dark:border-[#FF6575] rounded-full text-[#B4A7F5] dark:text-[#FF6575] hover:bg-[#B4A7F5] dark:hover:bg-[#FF6575] hover:text-white transition-all duration-300 hover:border-[#B4A7F5] dark:hover:border-[#FF6575] group-hover:text-white">
            <Link href={`/courses/${course.id}`}>View Course</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
