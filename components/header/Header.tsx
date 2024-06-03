"use client";
// import cart from "../../public/icons/cart.svg";
import menu from "../../public/icons/menu.svg";

import Theme from "../UI/Theme";
// import { useLocale } from "next-intl";
import LangSwitcher from "../UI/Lang-switcher";
// import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import UserDropDown from "../UI/user-menu/UserDropDown";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  // const t = useLocale();
  // const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);

  const { user } = useUser();

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
        scrolling ? "bg-white" : "bg-transparent"
      }  px-5 py-3  lg:flex  lg:px-20 xl:px-20   transition-all duration-300 content-center justify-center  fixed   w-full  z-20`}
    >
      <nav className="flex justify-between sm:gap-10 xl:gap-40">
        <div className="flex lg:hidden">
          <Image src={menu} width={40} height={40} alt="Logo" />
        </div>
        <div className="">
          <Image
            src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/logo.svg"
            className="w-40"
            width={40}
            height={40}
            alt="Logo"
          ></Image>
        </div>

        <div className="justify-center items-center hidden lg:flex">
          <ul className="flex gap-7 text-[#685F78] ">
            <li className="hover:text-[#FF6575] cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#FF6575] cursor-pointer">
              <Link href="/courses">Courses</Link>
            </li>
            <li className="hover:text-[#FF6575] cursor-pointer">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-[#FF6575] cursor-pointer">
              <Link href="/about">Instructors</Link>
            </li>
            <li className="hover:text-[#FF6575] cursor-pointer">
              <Link href="/about">Students</Link>
            </li>
            <li className="hover:text-[#FF6575] cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-[#FF6575] cursor-pointer">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-2 items-center">
          <div>
            <LangSwitcher />
          </div>
          <div>
            <Theme />
          </div>

          {user ? (
            <div className="flex items-center gap-3">
              {/* <Image
                className="w-10 border-2 border-white cursor-pointer rounded-full"
                src={user.picture}
                width={100}
                height={100}
                alt={user.name}
              /> */}

              <UserDropDown userName={user.name} />
            </div>
          ) : (
            <>
              <a href="/api/auth/login">
                <button
                  className={`${
                    scrolling ? "bg-[#B4A7F5] text-white" : "bg-white"
                  } py-2.5 px-9  rounded-full hover:bg-[#FF6575]
         hover:text-white transition-all duration-500`}
                >
                  Login
                </button>
              </a>
              <button
                className="py-2.5 px-9 border-2 border-[#B4A7F5] rounded-full
         text-[#B4A7F5] hover:bg-[#FF6575] hover:text-white
          transition-all duration-300 hover:border-[#FF6575] "
              >
                Register
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
