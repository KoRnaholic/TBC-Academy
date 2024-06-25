"use client";
import { useFormStatus } from "react-dom";

export default function UpdateUserInfoButton({
  update,
  updating,
}: {
  update: string;
  updating: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="px-5 text-sm xl:text-base py-3 w-full xl:w-1/2 focus:outline-none  rounded-md bg-[#FF6575] hover:bg-[#f95666]   text-white font-bold"
    >
      {pending ? updating : update}
    </button>
  );
}
