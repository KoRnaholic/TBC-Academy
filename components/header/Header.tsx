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

export default function Header() {
  const t = useLocale();

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
              <Link href={`/${t}`}>{t === "en" ? "Home" : "მთავარი"}</Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <Link href="/profile">{t === "en" ? "Profile" : "პროფილი"}</Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <Link href="/about">{t === "en" ? "About" : "შესახებ"}</Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <Link href="/contact">{t === "en" ? "Contact" : "კონტაქტი"}</Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <Link href="/blog">{t === "en" ? "Blog" : "ბლოგი"}</Link>
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
          <Image src={menu} alt="menu" width={35} />
        </div>
      </nav>
    </header>
  );
}
