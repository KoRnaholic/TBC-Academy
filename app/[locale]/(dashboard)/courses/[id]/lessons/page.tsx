import Link from "next/link";
import React from "react";
import Lesson from "../../../../../../components/courses/lessons/Lesson";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import TimerIcon from "@mui/icons-material/Timer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import { sqlGetSingleCourse } from "../../../../../sql/sqlRequests";
// import CourseComment from "../../../../../../components/courses/AddCourseComment";
import CircleIcon from "@mui/icons-material/Circle";
import { CreatedCourse } from "../../../../../../types/types";
import ReviewModal from "../../../../../../components/UI/modals/ReviewModal";
import { sqlReviewExists } from "../../../../../sql/sql-review/sqlReviewExists";

export const revalidate = 0;

export default async function LessonsPage({
  params,
}: {
  params: { localle: string; id: string };
}) {
  const data: CreatedCourse[] = await sqlGetSingleCourse(Number(params.id));
  const course = data[0];
  const whatToLearnArray = course.what_to_learn?.split("; ");
  const requirements = course.requirements?.split("; ");
  const audience = course.audience?.split("; ");

  const courseId = Number(params.id);
  const exists = await sqlReviewExists(courseId);
  const isReviewed = exists[0].exists;

  return (
    <>
      <div className="bg-[#fafafa]">
        <div
          className="mt-20 w-full h-[190px] relative bg-center bg-no-repeat bg-cover pt-12 "
          style={{
            backgroundImage: "url('/images/bg-about.png')",
            backgroundColor: "rgba(250, 246, 246, .9)",
          }}
        >
          <div className="flex flex-col  gap-3 items-center justify-center">
            <h1 className="text-5xl text-[#002058]">Lesssons</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                Home
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]">Lessons</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col justify-center items-center bg-[#fafafa]">
        <Lesson link={course.course_link} />

        <div className="mt-20 flex justify-center gap-8 items-start">
          <div className="flex flex-col gap-8">
            <div className="p-5 border rounded-lg bg-white">
              <h2 className="text-2xl text-[#002058]">Overview</h2>
              <p className="max-w-[800px] text-gray-500 mt-5">
                {course.overview}
              </p>
            </div>

            <div className="p-5 border rounded-lg bg-white">
              <h2 className="text-2xl text-[#002058]">Requirements</h2>
              {requirements?.map((item) => {
                return (
                  <p key={item} className="max-w-[800px] text-gray-500 mt-5">
                    <CircleIcon className="w-2 text-[#FF6575]" /> {item}
                  </p>
                );
              })}
            </div>
            <div className="p-5 border rounded-lg bg-white">
              <h2 className="text-2xl text-[#002058]">Audience</h2>
              {audience?.map((item) => {
                return (
                  <p key={item} className="max-w-[800px] text-gray-500 mt-5">
                    <CircleIcon className="w-2 text-[#FF6575]" /> {item}
                  </p>
                );
              })}
            </div>
            <div className="p-5 border rounded-lg bg-white">
              <h2 className="text-2xl text-[#002058]">What Will I Learn?</h2>
              {whatToLearnArray?.map((item) => {
                return (
                  <p key={item} className="max-w-[800px] text-gray-500 mt-5">
                    <CircleIcon className="w-2 text-[#FF6575]" /> {item}
                  </p>
                );
              })}
            </div>

            {/* <CourseComment id={course.id} /> */}
          </div>

          <div className="w-1/3 flex flex-col gap-5">
            <ReviewModal isReviewed={isReviewed} courseId={courseId} />

            <div className=" bg-white border  rounded-lg shadow-md p-5 font-sans">
              <ul className="flex flex-col gap-4 ">
                <li className="flex gap-2 text-gray-500 font-semibold">
                  <CastForEducationIcon className="text-[#b4a7f5]" />
                  Lessons :
                  <span className="font-bold text-black">{course.lessons}</span>
                </li>
                <li className="flex gap-2 text-gray-500 font-semibold">
                  <TimerIcon className="text-[#b4a7f5]" />
                  duration :
                  <span className="font-bold text-black">
                    {course.duration}
                  </span>
                </li>
                <li className="flex gap-2 text-gray-500 font-semibold">
                  <TrendingUpIcon className="text-[#b4a7f5]" />
                  Level :<span className="font-bold text-black">All Level</span>
                </li>
                <li className="flex gap-2 text-gray-500 font-semibold">
                  <GroupIcon className="text-[#b4a7f5]" /> Maximum Studentss :
                  <span className="font-bold text-black">150</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
