"use client";
import user from "@/public/icons/user.svg";
import cart from "@/public/icons/cart.svg";
import menu from "@/public/icons/menu.svg";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else if (!dark) {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  function toggleDarkMode() {
    setDark((prev) => !prev);
  }

  return (
    <header className="py-5 px-5 lg:py-5 lg:px-20 bg-slate-50 dark:bg-slate-600">
      <nav className="flex justify-between items-center">
        <div>
          <div className="logo">
            Open<span className="text-yellow-300">Market</span>
          </div>
        </div>

        <div>
          <ul className="hidden lg:flex gap-8 text-lg dark:text-white">
            <li className="border-b-4 border-transparent hover:border-black ">
              <Link
                // className={isActive ? "border-b-4 border-black" : ""}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <Link
                // className={({ isActive }) =>
                //   isActive ? "border-b-4 border-black" : ""
                // }
                href="/profile"
              >
                Profile
              </Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <Link
                // className={({ isActive }) =>
                //   isActive ? "border-b-4 border-black" : ""
                // }
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <Link
                // className={({ isActive }) =>
                //   isActive ? "border-b-4 border-black" : ""
                // }
                href="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <Link
                // className={({ isActive }) =>
                //   isActive ? "border-b-4 border-black" : ""
                // }
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="hidden lg:flex gap-5 items-center">
            <li>
              <div className="justify-center flex flex-row items-center transition-all ease-in-out">
                <div className="flex flex-row justify-between toggle">
                  <label
                    htmlFor="dark-toggle"
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        name="dark-mode"
                        id="dark-toggle"
                        className="checkbox hidden"
                        onClick={toggleDarkMode}
                      />
                      <div className="block border-[1px] dark:border-white border-slate-800 w-10 h-6 rounded-full"></div>
                      <div
                        className={`dot absolute left-1 top-1 dark:bg-white bg-slate-600 w-4 h-4 rounded-full transition ${
                          dark ? "translate-x-full" : ""
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <Image
                className="cursor-pointer w-[25px] dark:invert"
                src={user}
                alt="logo2"
              />
            </li>
            <li>
              <Image
                className="cursor-pointer w-[25px] dark:invert"
                src={cart}
                alt="logo3"
              />
            </li>
          </ul>
        </div>

        <div className="lg:hidden dark:invert w-[35px] cursor-pointer">
          <Image src={menu} alt="menu" width="35px" />
        </div>
      </nav>
    </header>
  );
}
