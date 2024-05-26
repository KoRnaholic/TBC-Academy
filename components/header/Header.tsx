"use client";
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

export default function Header({ quantity }: { quantity: number }) {
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
    // <header
    //   className={`${
    //     scrolling ? "bg-[#051922]" : "bg-transparent"
    //   } py-5 px-5 lg:py-5 lg:px-20   fixed transition-all duration-300   w-full text-[#fff] z-10`}
    // >
    //   <nav className="flex justify-between items-center">
    //     <div>
    //       <div className="logo">
    //         Open<span className="text-yellow-300">Market</span>
    //       </div>
    //     </div>

    //     <div>
    //       <ul className="hidden lg:flex gap-8 text-lg dark:text-white">
    //         <li className="border-b-4 border-transparent hover:text-[#F28123]  hover:-translate-y-1 transition-all">
    //           <Link
    //             className={`${pathname === `/` ? "text-[#F28123] " : ""}`}
    //             href={`/${t}`}
    //             scroll={false}
    //           >
    //             {t === "en" ? "Home" : "მთავარი"}
    //           </Link>
    //         </li>
    //         <li className="border-b-4 border-transparent hover:text-[#F28123]  hover:-translate-y-1 transition-all">
    //           <Link
    //             className={`${pathname === `/profile` ? "text-[#F28123]" : ""}`}
    //             href="/profile"
    //             scroll={false}
    //           >
    //             {t === "en" ? "Profile" : "პროფილი"}
    //           </Link>
    //         </li>
    //         <li className="border-b-4 border-transparent hover:text-[#F28123]  hover:-translate-y-1 transition-all">
    //           <Link
    //             className={`${pathname === `/about` ? "text-[#F28123]" : ""}`}
    //             href="/about"
    //             scroll={false}
    //           >
    //             {t === "en" ? "About" : "შესახებ"}
    //           </Link>
    //         </li>
    //         <li className="border-b-4 border-transparent hover:text-[#F28123]  hover:-translate-y-1 transition-all">
    //           <Link
    //             className={`${pathname === `/contact` ? "text-[#F28123]" : ""}`}
    //             href="/contact"
    //             scroll={false}
    //           >
    //             {t === "en" ? "Contact" : "კონტაქტი"}
    //           </Link>
    //         </li>
    //         <li className="border-b-4 border-transparent hover:text-[#F28123]  hover:-translate-y-1 transition-all">
    //           <Link
    //             className={`${pathname === `/blog` ? "text-[#F28123]" : ""}`}
    //             href="/blog"
    //             scroll={false}
    //           >
    //             {t === "en" ? "Blog" : "ბლოგი"}
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div>
    //       <ul className="hidden lg:flex gap-5 items-center">
    //         <li>
    //           <Link href="/admin" scroll={false}>
    //             Admin
    //           </Link>
    //         </li>
    //         <li>
    //           <LangSwitcher />
    //         </li>
    //         <li>
    //           <Theme />
    //         </li>

    //         <li className="flex flex-col justify-center items-center  text-orange-500 ">
    //           <p className="absolute top-5 right-36 text-white text-xs z-20 rounded-full bg-orange-500 px-1  ">
    //             {quantity ? quantity : 0}
    //           </p>

    //           <Link href="/checkout" scroll={false}>
    //             <Image
    //               className="cursor-pointer w-[25px] "
    //               src={cart}
    //               alt="logo3"
    //             />
    //           </Link>
    //         </li>
    //         <li>
    //           <LogOut />
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="lg:hidden dark:invert w-[35px] cursor-pointer">
    //       <Image src={menu} alt="menu" width={35} />
    //     </div>
    //   </nav>
    // </header>

    // className="content-center p-5 fixed z-10 w-full"
    <header
      className={`${
        scrolling ? "bg-white" : "bg-transparent"
      }  px-5 py-3 hidden lg:flex  lg:px-20   transition-all duration-300 content-center justify-center  fixed   w-full  z-20`}
    >
      <nav className="flex justify-center gap-16">
        <div>
          <img
            src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/logo.svg"
            className="w-40"
            alt="Logo"
          ></img>
        </div>

        <div className=" flex justify-center items-center">
          <ul className="flex gap-7 text-[#685F78] ">
            <li className="hover:text-[#FF6575] cursor-pointer">Home</li>
            <li className="hover:text-[#FF6575] cursor-pointer">About Us</li>
            <li className="hover:text-[#FF6575] cursor-pointer">instructors</li>
            <li className="hover:text-[#FF6575] cursor-pointer">Students</li>
            <li className="hover:text-[#FF6575] cursor-pointer">Pages</li>
            <li className="hover:text-[#FF6575] cursor-pointer">Blog</li>
            <li className="hover:text-[#FF6575] cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div className="flex gap-2 items-center">
          <div>
            <LangSwitcher />
          </div>
          <div>
            <Theme />
          </div>
          <button
            className={`${
              scrolling ? "bg-[#B4A7F5] text-white" : "bg-white"
            } py-2.5 px-9  rounded-full hover:bg-[#FF6575]
           hover:text-white transition-all duration-500`}
          >
            Login
          </button>
          <button
            className="py-2.5 px-9 border-2 border-[#B4A7F5] rounded-full
           text-[#B4A7F5] hover:bg-[#FF6575] hover:text-white
            transition-all duration-300 hover:border-[#FF6575] "
          >
            Register
          </button>
        </div>
      </nav>
    </header>
  );
}
