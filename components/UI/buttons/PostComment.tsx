"use client";

import { useFormStatus } from "react-dom";
import { OverviewTranslate } from "../../courses/Overview";

export default function PostComment({
  overviewTranslate,
}: {
  overviewTranslate: OverviewTranslate;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="flex flex-col gap-4 ">
        <h3 className="text-2xl text-[#002058] dark:text-white">
          {overviewTranslate.leavecomment}
        </h3>
        <label className="text-gray-700 dark:text-gray-300">
          {overviewTranslate.yourcomment}
        </label>
        <input
          className="block focus:outline-none focus:border-gray-500 w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-[#2A2A2A] border border-gray-300 dark:border-gray-600 rounded-md"
          type="text"
          placeholder={`${overviewTranslate.yourcomment}`}
          name="comment"
        />
      </div>
      <button
        type="submit"
        className="mt-10 bg-[#FF6575] hover:bg-[#e14e5c] px-5 py-3 rounded-md text-white"
      >
        {pending ? "Posting..." : overviewTranslate.postcomment}
      </button>
    </>
  );
}
