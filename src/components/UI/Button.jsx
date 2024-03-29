import React from "react";

export default function Button({ children, styles }) {
  return (
    <>
      <button
        className={`${
          styles
            ? styles
            : "hover:bg-slate-800 px-4 py-2 bg-gray-600 text-white text-xs font-bold  rounded"
        } `}
      >
        {children}
      </button>
    </>
  );
}
