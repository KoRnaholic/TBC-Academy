"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import profile from "../../../public/icons/profile/profile.svg";
import packages from "../../../public/icons/profile/package.svg";
import logout from "../../../public/icons/profile/logout.svg";
import { UserObject } from "../../../app/sql/sqlGetUser";

export default function UserDropDown({ user }: { user: UserObject }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        // className="bg-blue-500 text-white px-1 py-2 rounded"
      >
        {user && (
          <Image
            className="w-11 border-2 border-white cursor-pointer rounded-full"
            src={user?.userInfo.image || ""}
            width={100}
            height={100}
            alt={user?.userInfo.name || "avatar"}
          />
        )}
      </button>

      <div
        className={`absolute top-10 right-0 font-sans  shadow-xl p-2 
         bg-white rounded-lg w-44 z-10 transition-all duration-500 ease-in-out transform ${
           isOpen
             ? "opacity-100 translate-y-0"
             : "opacity-0 pointer-events-none  translate-y-4"
         }`}
      >
        <button className="flex flex-col w-full items-start border-b-2 justify-start text-lg  px-2 pb-2 font-bold text-[#002058]">
          {user?.userInfo.name.split(" ")[0]}
          <span className="text-sm text-black font-normal">
            {user?.role === "instructor" ? "Tutor Instructor" : "Student"}
          </span>
        </button>
        <Link
          href="/dashboard"
          className="flex w-full items-center justify-start gap-2 px-2 py-2 hover:text-red-500"
        >
          <Image src={profile} alt="profile" />
          Profile
        </Link>
        <Link
          href="/packages"
          className="flex w-full items-center justify-start gap-1.5 px-2 py-2 hover:text-red-500"
        >
          <Image src={packages} alt="settings" />
          Packages
        </Link>
        <button className="flex w-full items-center justify-start gap-2 px-[9px] py-2 hover:text-red-500">
          <Image src={logout} alt="logout" />
          <a href="/api/auth/logout">Logout</a>
        </button>
      </div>
    </div>
  );
}
