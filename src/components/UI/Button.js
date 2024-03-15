import React from "react";

export default function Button({ children, forBanner }) {
  return (
    <>
      <button
        className={`${
          forBanner
            ? "py-3 px-7 mt-8 bg-slate-700 hover:bg-slate-800 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
            : "  hover:bg-slate-800 px-4 py-2 bg-gray-600 text-white text-xs font-bold  rounded"
        } `}
      >
        {children}
      </button>
    </>
  );
}
