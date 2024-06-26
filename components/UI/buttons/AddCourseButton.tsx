"use client";

import { useFormStatus } from "react-dom";

export default function AddCourseButton({
  add,
  checking,
}: {
  add: string;
  checking: string;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        className=" bg-[#FF6575] w-full hover:bg-[#ee5262] text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {pending ? checking : add}
      </button>
    </>
  );
}
