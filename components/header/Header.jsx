"use client";
import user from "@/public/icons/user.svg";
import cart from "@/public/icons/cart.svg";
import menu from "@/public/icons/menu.svg";
import light from "@/public/icons/light.svg";
import dark from "@/public/icons/dark.svg";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogOut from "../UI/Logout";
import { useTheme } from "next-themes";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  console.log(resolvedTheme);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              <div>
                <div className="inline-block relative">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${
                      resolvedTheme === "light" ? "bg-gray-200" : "bg-gray-500"
                    }  text-gray-600 font-semibold py-2 px-3 rounded-full inline-flex items-center`}
                  >
                    <span className="mr-1">
                      {resolvedTheme === "light" ? (
                        <Image
                          className="cursor-pointer w-[25px] dark:invert"
                          src={light}
                          alt="light"
                        />
                      ) : (
                        <Image
                          className="cursor-pointer w-[25px] dark:invert"
                          src={dark}
                          alt="dark"
                        />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <ul className="absolute bg-white border rounded-md mt-1">
                      <li>
                        <button
                          onClick={() => {
                            setTheme("light");
                            setIsOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none`}
                        >
                          Light
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setTheme("system");
                            setIsOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none `}
                        >
                          System
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setTheme("dark");
                            setIsOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none`}
                        >
                          Dark
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </li>
            <li>
              <LogOut />
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
