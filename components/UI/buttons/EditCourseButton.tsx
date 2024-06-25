"use client";
import { useFormStatus } from "react-dom";

export default function EditCourseButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <button className="bg-red-400 hover:bg-red-500 rounded-md py-2 px-3 text-lg text-white">
        {pending ? "Editing..." : "Save Edit"}
      </button>
    </>
  );
}
