"use client";

import { useFormStatus } from "react-dom";

export default function PostComment() {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl text-[#002058]">Leave Comment</h3>
        <label>Your Comment</label>
        <input
          className="block focus:outline-none focus:border-gray-500 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  "
          type="text"
          placeholder="Leave your comment"
          name="comment"
        />
      </div>
      <button
        type="submit"
        className="mt-10 bg-[#FF6575] hover:bg-[#e14e5c] px-5 py-3 rounded-md text-white "
      >
        {pending ? "Posting..." : "Post Coomment"}
      </button>
    </>
  );
}
