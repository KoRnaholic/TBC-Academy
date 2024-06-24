import Image from "next/image";

import CourseCard from "./CourseCard";
import { Course } from "../../types/types";
import { QueryResultRow } from "@vercel/postgres";
import CourseComment from "./AddCourseComment";
import { sqlGetReviews } from "../../app/sql/sql-review/sqlGetReviews";
import StarsComponent from "../UI/StarsComponent";
import LikeButton from "../UI/buttons/LikeButton";
import DisslikeButton from "../UI/buttons/DislikeButton";

export const revalidate = 0;

export default async function Overview({
  course,
}: {
  course: Course | QueryResultRow;
}) {
  const reviews = await sqlGetReviews(course.id);
  return (
    <div className="flex flex-col xl:flex-row justify-center gap-10 mx-5 bg-[#fafafa] dark:bg-[#1A1A1A] pb-10">
      <div className="flex flex-col gap-8 mt-20">
        <div className="p-5 border rounded-lg bg-white dark:border-gray-500 dark:bg-[#2A2A2A]">
          <h2 className="text-2xl text-[#002058] dark:text-white">Overview</h2>
          <p className="max-w-[800px] text-gray-500 dark:text-gray-300 mt-5">
            {course.overview}
          </p>
        </div>

        <div className="p-5 border rounded-lg bg-white dark:border-gray-500 dark:bg-[#2A2A2A]">
          <h2 className="text-2xl text-[#002058] dark:text-white">
            Course Content
          </h2>
        </div>

        <div className="p-5 border  dark:border-gray-500 rounded-lg bg-white dark:bg-[#2A2A2A]">
          <h2 className="text-2xl text-[#002058] dark:text-white">
            About Instructor
          </h2>
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
                <span className="text-[#002058] dark:text-white">
                  Michael Morgan
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  Instructor
                </span>
              </div>
            </div>
            <div className="text-[#FF6575] dark:text-[#FF6575]">stars</div>
          </div>
          <div className="flex gap-6 mt-5 text-lg border-y p-4 dark:border-gray-600">
            <span className="flex items-center dark:text-gray-300">
              6 Students
            </span>
            <span className="flex items-center dark:text-gray-300">
              11 Courses
            </span>
            <span className="dark:text-gray-300">45 Reviews</span>
          </div>
          <div className="mt-5">
            <p className="max-w-[800px] text-gray-500 dark:text-gray-300">
              Very well thought out and articulate communication. Clear
              milestones, deadlines and fast work. Patience. Infinite patience.
              No shortcuts. Even if the client is being careless. Some quick
              example text to build on the card title and bulk the card&apos;s
              content. Moltin gives you platform. As a highly skilled and
              successful product development and design specialist with more
              than 4 years of experience, my experience lies in successfully
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

        <h2 className="text-3xl text-[#002058] dark:text-white ">Reviews</h2>
        <div className="px-5 py-2 flex flex-col gap-5 border dark:border-gray-500 rounded-lg bg-white dark:bg-[#2A2A2A]">
          {reviews?.map((review) => {
            const date = new Date(review.created_at);
            const options: Intl.DateTimeFormatOptions = {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
            };
            const formattedDate = date.toLocaleString("en-US", options);
            return (
              <div
                key={review.id}
                className="flex flex-col justify-start gap-3 mt-5 border-b py-2 dark:border-gray-600"
              >
                <div className="flex flex-col gap-4 sm:flex-row justify-between">
                  <div className="flex gap-3">
                    <Image
                      className="w-14 border-2 border-white dark:border-gray-600 cursor-pointer rounded-full flex-none"
                      src={`${review.image}`}
                      alt="avatar"
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col">
                      <span className="text-[#002058] dark:text-white">
                        {review.student_name}
                      </span>
                      <span className="dark:text-gray-300">
                        {formattedDate}
                      </span>
                    </div>
                  </div>
                  <div className="flex text-black dark:text-[#FF6575]">
                    <StarsComponent rating={review.rating} />
                    {review.rating} out of 5
                  </div>
                </div>
                <span className="max-w-sm dark:text-gray-300">
                  {review.comment}
                </span>
                <div className="flex gap-4 justify-end">
                  <LikeButton reviewId={review.id} />
                  <DisslikeButton reviewId={review.id} />
                </div>
              </div>
            );
          })}
        </div>
        <CourseComment id={course.id} />
      </div>

      <div className="xl:-mt-52 sticky">
        <CourseCard course={course} />
      </div>
    </div>
  );
}
