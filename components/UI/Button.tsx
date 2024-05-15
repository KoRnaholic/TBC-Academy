import React from "react";
import { ButtonProps } from "../../types/types";

export default function Button({
  children,
  styles,
  onClick,
  product,
}: ButtonProps) {
  return (
    <>
      <button
        onClick={() => onClick(product)}
        className={`${
          styles
            ? styles
            : "hover:bg-[#051922] px-3 py-1 bg-[#F28123]  text-white text-medium font-base  rounded-full"
        } `}
      >
        {children}
      </button>
    </>
  );
}
