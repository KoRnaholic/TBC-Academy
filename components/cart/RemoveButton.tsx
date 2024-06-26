"use client";

import { useFormStatus } from "react-dom";
import { RemoveTransl } from "./SingleCartItem";
export default function RemoveButton({
  removeTransl,
}: {
  removeTransl: RemoveTransl;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      className="text-[#FF6575] flex flex-col w-full text-center border font-semibold border-[#FF6575]
         px-4 py-2 rounded hover:bg-[#ec5362] hover:text-white transition-all duration-300"
    >
      {pending ? (
        <span className="flex w-[100px] justify-center gap-1">
          {removeTransl.removing}
          <div className="flex">
            <div className="relative">
              <div className="w-4 h-4 rounded-full absolute inset-1 border-4 border-dashed border-gray-200"></div>

              <div className="w-4 h-4 rounded-full animate-spin absolute inset-1 border-4 border-dashed border-white-500 border-t-transparent"></div>
            </div>
          </div>
        </span>
      ) : (
        <div className="w-[100px]">{removeTransl.remove}</div>
      )}
    </button>
  );
}
