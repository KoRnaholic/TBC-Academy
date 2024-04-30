import React from "react";
import { ButtonProps } from "../../types/types";

export default function Button({ children, styles }: ButtonProps) {
  return (
    <>
      <button
        className={`${
          styles
            ? styles
            : "hover:bg-[#051922] px-4 py-2 bg-[#F28123]  text-white text-medium font-base  rounded-full"
        } `}
      >
        {children}
      </button>
    </>
  );
}
