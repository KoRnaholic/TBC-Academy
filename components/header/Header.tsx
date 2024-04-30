"use client";
import user from "../../public/icons/user.svg";
import cart from "../../public/icons/cart.svg";
import menu from "../../public/icons/menu.svg";

import Link from "next/link";
import Image from "next/image";
import LogOut from "../UI/Logout";

import Theme from "../UI/Theme";
import { useLocale } from "next-intl";
import LangSwitcher from "../UI/Lang-switcher";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const t = useLocale();
  const pathname = usePathname();

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolling ? "bg-[#051922]" : "bg-transparent"
      } py-5 px-5 lg:py-5 lg:px-20  dark:bg-slate-600 fixed transition-all duration-300   w-full text-[#fff] z-10`}
    >
      <nav className="flex justify-between items-center">
        <div>
          <div className="logo">
            Open<span className="text-yellow-300">Market</span>
          </div>
        </div>

        <div>
          <ul className="hidden lg:flex gap-8 text-lg dark:text-white">
            <li className="border-b-4 border-transparent hover:text-[#F28123]  ">
              <Link
                className={`${pathname === `/${t}` ? "text-[#F28123] " : ""}`}
                href={`/${t}`}
              >
                {t === "en" ? "Home" : "მთავარი"}
              </Link>
            </li>
            <li className="border-b-4 border-transparent hover:text-[#F28123] ">
              <Link
                className={`${
                  pathname === `/${t}/profile` ? "border-b-4  " : ""
                }`}
                href="/profile"
              >
                {t === "en" ? "Profile" : "პროფილი"}
              </Link>
            </li>
            <li className="border-b-4 border-transparent hover:text-[#F28123] ">
              <Link
                className={`${
                  pathname === `/${t}/about` ? "text-[#F28123]" : ""
                }`}
                href="/about"
              >
                {t === "en" ? "About" : "შესახებ"}
              </Link>
            </li>
            <li className="border-b-4 border-transparent hover:text-[#F28123] ">
              <Link
                className={`${
                  pathname === `/${t}/contact` ? "text-[#F28123]" : ""
                }`}
                href="/contact"
              >
                {t === "en" ? "Contact" : "კონტაქტი"}
              </Link>
            </li>
            <li className="border-b-4 border-transparent hover:text-[#F28123] ">
              <Link
                className={`${
                  pathname === `/${t}/blog` ? "text-[#F28123]" : ""
                }`}
                href="/blog"
              >
                {t === "en" ? "Blog" : "ბლოგი"}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="hidden lg:flex gap-5 items-center">
            <li>
              <LangSwitcher />
            </li>
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
                className="cursor-pointer w-[25px]  dark:invert"
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
          <Image src={menu} alt="menu" width={35} />
        </div>
      </nav>
    </header>
  );
}
