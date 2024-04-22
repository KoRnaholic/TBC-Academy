"use client";
import user from "@/public/icons/user.svg";
import cart from "@/public/icons/cart.svg";
import menu from "@/public/icons/menu.svg";
import light from "@/public/icons/light.svg";
import dark from "@/public/icons/dark.svg";
import system from "@/public/icons/system.svg";

import Link from "next/link";
import Image from "next/image";
import LogOut from "../UI/Logout";
import { useTheme } from "next-themes";
import Theme from "../UI/Theme";

export default function Header() {
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
              <Theme />
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
            <li>
              <LogOut />
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
