"use client";
import { useFormStatus } from "react-dom";

export default function UpdateReviewButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <button className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors duration-300">
        {pending ? "Updating..." : "Update Review"}
      </button>
    </>
  );
}
