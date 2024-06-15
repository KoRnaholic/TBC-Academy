import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-1/2 mt-40">
      <div className="relative">
        <div className="w-20 h-20 rounded-full absolute border-8 border-solid border-gray-200"></div>

        <div className="w-20 h-20 rounded-full animate-spin absolute border-8 border-solid border-red-300 border-t-transparent"></div>
      </div>
    </div>
  );
}
