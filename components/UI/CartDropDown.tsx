"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Course } from "../../types/types";

interface CartDropDownProps {
  courses: Course[] | null;
  isCartOpen: boolean;
  setCartIsOpen: (arg: boolean) => void;
}

export default function CartDropDown({
  courses,
  isCartOpen,
  setCartIsOpen,
}: CartDropDownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setCartIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <div
        className={` absolute top-12 right-24 font-sans flex flex-col gap-3  shadow-xl p-5 border 
           bg-white rounded-lg w-[430px] z-10 transition-all duration-500 ease-in-out transform ${
             isCartOpen
               ? "opacity-100 translate-y-0"
               : "opacity-0 pointer-events-none  translate-y-4"
           }`}
      >
        {courses?.map((course: Course) => {
          return (
            <div key={course.id} className="flex justify-between">
              <div className="flex gap-3">
                <div className="w-28">
                  <Image
                    className="rounded-md"
                    src={course.image}
                    width={200}
                    height={200}
                    alt="course"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p>{course.name.slice(0, 15)}...</p>
                  <span className="text-red-400">${course.price}</span>
                </div>
              </div>
              <div className="flex items-center">
                <button className="bg-red-400 py-1 px-3 rounded-md text-white">
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
