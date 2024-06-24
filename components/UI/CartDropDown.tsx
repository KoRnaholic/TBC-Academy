"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Course } from "../../types/types";
import Link from "next/link";

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

  if (courses?.length === 0) {
    return (
      <div ref={dropdownRef}>
        <div
          className={` absolute top-12 right-24 font-sans flex flex-col gap-3  shadow-xl p-5 border 
         bg-white rounded-lg w-[230px] z-10 transition-all duration-500 ease-in-out transform ${
           isCartOpen
             ? "opacity-100 translate-y-0"
             : "opacity-0 pointer-events-none  translate-y-4"
         }`}
        >
          <div className="mx-auto text-lg font-semibold text-red-400">
            Cart is empty!
          </div>
        </div>
      </div>
    );
  }

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
                <div className="">
                  <Image
                    className="rounded-md w-24 h-18"
                    src={course.image}
                    width={200}
                    height={200}
                    alt="course"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="font-semibold">{course.name}</p>
                  <span>Quantity: {course.quantity}</span>
                  <span className="text-red-400">${course.price}</span>
                </div>
              </div>
            </div>
          );
        })}

        <Link
          className=" bg-red-400 hover:bg-red-500 px-2 py-2 flex justify-center rounded-md  text-white"
          href="/cart"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
}
