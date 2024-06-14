"use client";
import { ReactNode, useEffect, useState } from "react";
import UserDropDown from "../UI/user-menu/UserDropDown";
import LangSwitcher from "../UI/Lang-switcher";
import Theme from "../UI/Theme";
import cart from "../../public/icons/cart-2.svg";
import Image from "next/image";
import Link from "next/link";
import { UserObject } from "../../app/sql/sqlGetUser";

interface UserInfo {
  id: string;
  name: string;
  surname: string;
  email: string;
  course_id: string | null;
  image: string;
}

export interface User {
  userInfo: UserInfo;
  role: "Student" | "Instructor" | "admin"; // You can include other possible roles if necessary
}

interface NavProps {
  children: ReactNode;
  user: UserObject | undefined;
  cartQuantity: number;
}

export default function Navigation({ children, user, cartQuantity }: NavProps) {
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

  //   if (user == undefined)
  //     return (
  //       <div className="loader">
  //         <div className="loader-inner">
  //           <div className="circle"></div>
  //         </div>
  //       </div>
  //     );
  return (
    <header
      className={`${
        scrolling ? "bg-white" : "bg-transparent"
      }  px-5 py-3  lg:flex  lg:px-20 xl:px-20 gap-20   transition-all duration-300 content-center justify-center  fixed   w-full  z-20`}
    >
      {children}

      <div className="flex gap-2 items-center relative">
        <Link href="/cart" className="cursor-pointer">
          <Image src={cart} alt="cart" />
          {cartQuantity && (
            <span className="absolute animate-bounce transition-all duration-1500 top-0 left-4 py-0.5 text-white text-[12px] px-2 rounded-full  bg-[#FF6575]">
              {cartQuantity}
            </span>
          )}
        </Link>
        <div>
          <LangSwitcher />
        </div>
        <div>
          <Theme />
        </div>
      </div>
      {user ? (
        <div className="flex items-center gap-3">
          <UserDropDown user={user} />
        </div>
      ) : (
        <div className="flex gap-3">
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
        </div>
      )}
    </header>
  );
}
