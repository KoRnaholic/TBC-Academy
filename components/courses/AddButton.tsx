"use client";

import { useFormStatus } from "react-dom";

export default function AddButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="py-2.5  text-white bg-[#FF6575] hover:bg-[#e72f41] px-3.5  w-full rounded-full
     transition-all duration-300"
    >
      {pending ? (
        <span className="flex justify-center gap-2">
          Processing
          <div className="flex">
            <div className="relative">
              <div className="w-6 h-6 rounded-full absolute border-4 border-dashed border-gray-200"></div>

              <div className="w-6 h-6 rounded-full animate-spin absolute border-4 border-dashed border-white-500 border-t-transparent"></div>
            </div>
          </div>
        </span>
      ) : (
        "Add To Cart"
      )}
    </button>
  );
}
