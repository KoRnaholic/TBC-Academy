import Image from "next/image";
import React from "react";
import { sqlGetCourseComments } from "../../app/sql/sql-courses/sqlGetCourseComments";

export default async function SingleCourseComments({
  courseId,
}: {
  courseId: number;
}) {
  const commentInfo = await sqlGetCourseComments(courseId);

  return (
    <div className="mt-10 ">
      {commentInfo && commentInfo[0] && (
        <>
          <h2 className="text-3xl mb-5 text-[#002058] dark:text-white">
            Comments
          </h2>

          <div className="border rounded-lg dark:border-gray-500">
            {commentInfo?.map((info) => {
              const date = new Date(info.created_at);
              return (
                <div
                  key={info.id}
                  className="p-6 py-6 flex gap-5 rounded-lg bg-white dark:bg-[#2A2A2A]"
                >
                  <div>
                    <Image
                      className="w-14 border-2 border-white dark:border-gray-600 cursor-pointer rounded-full"
                      src={info.image}
                      width={100}
                      height={100}
                      alt="avatar"
                    />
                  </div>

                  <div className="flex flex-col gap-2 border-b dark:border-gray-600">
                    <p className="text-lg text-[#002058] dark:text-white">
                      {info.name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {date.toLocaleString()}
                    </p>
                    <p className="max-w-xl text-[#002058] dark:text-gray-300">
                      {info.comment}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
