"use client";
import { useFormStatus } from "react-dom";

export default function UpdateUserInfoButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="px-5 py-3 w-1/2 focus:outline-none  rounded-md bg-[#FF6575] hover:bg-[#f95666]   text-white font-bold"
    >
      {pending ? "Updating..." : "Update Profile"}
    </button>
  );
}
