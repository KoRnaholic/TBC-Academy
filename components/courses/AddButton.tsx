"use client";

import { useFormStatus } from "react-dom";

export default function AddButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="py-2.5  text-white bg-[#FF6575] hover:bg-[#e72f41] px-3.5 border-2 w-full rounded-full
     transition-all duration-300"
    >
      {pending ? "Adding To Cart..." : "Add To Cart"}
    </button>
  );
}
