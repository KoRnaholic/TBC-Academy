import Image from "next/image";
import play from "../../public/icons/play.svg";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import TimerIcon from "@mui/icons-material/Timer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import CircleIcon from "@mui/icons-material/Circle";
import { Course } from "../../types/types";
import { QueryResultRow } from "@vercel/postgres";
import { sqlAddToCart } from "../../app/sql/sqlAddToCart";
import { sqlExistsInCart } from "../../app/sql/sqlExistsInCart";
import Link from "next/link";
import AddButton from "./AddButton";
import { sqlExistsInPurchase } from "../../app/sql/sql-purchases/sqlExistsInPurchase";
import successSVG from "../../public/icons/success.svg";
import ShareButton from "../UI/buttons/ShareButton";
import { sqlSubExists } from "../../app/sql/sql-subscription/sqlSubExists";
import { OverviewTranslate } from "./Overview";

const courses = [
  { title: "Angular", color: "red" },
  { title: "Bootstrap", color: "pink" },
  { title: "CSS3", color: "purple" },
  { title: "Docker Development", color: "deep-purple" },
  { title: "Gatsby", color: "indigo" },
  { title: "GraphQL", color: "blue" },
  { title: "Javascript", color: "light-blue" },
  { title: "Node JS Frontend Development", color: "cyan" },
  { title: "Python Development", color: "teal" },
  { title: "React", color: "green" },
  { title: "React Native", color: "light-green" },
  { title: "Swift Developer", color: "lime-green" },
  { title: "UX/UI Design", color: "yellow-greenish" },
  { title: "WordPress", color: "orange-yellowish" },
];

export default async function CourseCard({
  course,
  overviewTranslate,
}: {
  course: Course | QueryResultRow;
  overviewTranslate: OverviewTranslate;
}) {
  const data = await sqlExistsInCart(course.id);
  const ifExists = data?.exists.exists;
  const subscription = await sqlSubExists();

  ifExists;
  const addToCart = sqlAddToCart.bind(null, course.id);
  const existsInPurchase = await sqlExistsInPurchase(course.id);

  return (
    <>
      <div className="w-full sm:w-4/5 md:w-[395px] mx-auto bg-white dark:bg-[#2A2A2A] rounded-lg shadow-md p-5">
        <div className="relative flex flex-col justify-center">
          <div className="relative w-full md:w-[340px] mx-auto h-[250px] overflow-hidden rounded-lg">
            <Image
              src={course.image}
              layout="fill"
              objectFit="cover"
              alt="course-1"
              className="cursor-pointer"
              priority
            />
            <span className="absolute inset-0 flex items-center justify-center cursor-pointer">
              <div className="p-3 bg-black rounded-full hover:scale-110 transition-all duration-500 opacity-80 flex items-center justify-center">
                <Image className="w-16" src={play} alt="video-play" />
              </div>
            </span>
          </div>

          <form
            action={addToCart}
            className="pt-4 flex flex-col justify-center gap-3 items-center text-lg"
          >
            <span className="flex justify-start text-gray-600 dark:text-gray-300 text-2xl items-start w-full">
              {course.price === "free" ? (
                "FREE"
              ) : (
                <span
                  className={`${
                    existsInPurchase.exists &&
                    "line-through decoration-2 decoration-slate-800 dark:decoration-white"
                  }`}
                >
                  ${course.price}
                </span>
              )}
            </span>
            <span className="text-sm text-green-500">
              {existsInPurchase.exists && (
                <span className="flex gap-2">
                  You have already purchased this course
                  <Image src={successSVG} alt="success" />
                </span>
              )}
            </span>

            {data?.role === "Student" && (
              <div className="w-full flex flex-col gap-3">
                {existsInPurchase.exists ||
                course.price === "free" ||
                subscription?.exists ? (
                  <Link
                    href={`/courses/${course.id}/lessons`}
                    className="py-2.5 text-center text-white bg-green-600 hover:bg-green-700 px-3.5   w-full rounded-full
             transition-all duration-300"
                  >
                    {overviewTranslate.startcourse}
                  </Link>
                ) : ifExists ? (
                  <Link
                    href="/cart"
                    className="py-2.5 text-center text-white bg-[#FF6575] hover:bg-[#e72f41] px-3.5  w-full rounded-full
         transition-all duration-300"
                  >
                    {overviewTranslate.viewcart}
                  </Link>
                ) : (
                  <AddButton
                    processing={overviewTranslate.processing}
                    add={overviewTranslate.cart}
                  />
                )}
                <ShareButton
                  overviewTranslate={overviewTranslate}
                  courseId={course.id}
                />
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-[#2A2A2A] border dark:border-gray-600 rounded-lg shadow-md p-5 font-sans">
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2 text-gray-500 dark:text-gray-300 font-semibold">
            <CastForEducationIcon className="text-[#b4a7f5]" />
            {overviewTranslate.lessons}
            <span className="font-bold text-black dark:text-white">
              {course.lessons}
            </span>
          </li>
          <li className="flex gap-2 text-gray-500 dark:text-gray-300 font-semibold">
            <TimerIcon className="text-[#b4a7f5]" />
            {overviewTranslate.duration}
            <span className="font-bold text-black dark:text-white">
              {course.duration}
            </span>
          </li>
          <li className="flex gap-2 text-gray-500 dark:text-gray-300 font-semibold">
            <TrendingUpIcon className="text-[#b4a7f5]" />
            Level:{" "}
            <span className="font-bold text-black dark:text-white">
              All Level
            </span>
          </li>
          <li className="flex gap-2 text-gray-500 dark:text-gray-300 font-semibold">
            <GroupIcon className="text-[#b4a7f5]" />
            {overviewTranslate.maximum}
            <span className="font-bold text-black dark:text-white">150</span>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <div className="bg-white dark:bg-[#2A2A2A] rounded-lg shadow-sm border dark:border-gray-600 px-6 py-4 font-sans">
          <h2 className="text-xl font-bold mb-4 text-[#002058] dark:text-white">
            {overviewTranslate.category}
          </h2>
          <ul className="flex flex-col gap-5">
            {courses.map((course) => (
              <li
                key={course.title}
                className="flex gap-2 text-[#002058] dark:text-white hover:text-[#FF6575] dark:hover:text-[#FF6575]
                 transition-all duration-300 cursor-pointer"
              >
                <CircleIcon className="w-2 text-[#FF6575]" />
                {course.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
