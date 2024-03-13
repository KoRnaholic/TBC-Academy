import React from "react";

export default function Button({ children, forBanner }) {
  return (
    <>
      <button
        className={`${
          forBanner
            ? "py-3 px-7 mt-8 bg-slate-700 hover:bg-slate-800  rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
            : "py-2 px-10 bg-slate-50 hover:bg-slate-200"
        } `}
      >
        {children}
      </button>
    </>
  );
}
