"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import UserDropDown from "../UI/user-menu/UserDropDown";
import LangSwitcher from "../UI/Lang-switcher";
import Theme from "../UI/Theme";
import cart from "../../public/icons/cart-2.svg";
import Image from "next/image";
import { UserObject } from "../../app/sql/sqlGetUser";
import CartDropDown from "../UI/CartDropDown";
import { Course } from "../../types/types";
import Link from "next/link";
import menu from "../../public/icons/menu.svg";
import { usePathname } from "next/navigation";

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
  courses: Course[] | null;
  navigation: {
    home: string;
    courses: string;
    about: string;
    instructors: string;
    students: string;
    blog: string;
    contact: string;
    admin: string;
    login: string;
    register: string;
    quantity: string;
    cart: string;
    empty: string;
  };
  role: string;
}

export default function Navigation({
  children,
  user,
  cartQuantity,
  courses,
  navigation,
  role,
}: NavProps) {
  const [scrolling, setScrolling] = useState(false);
  const [isCartOpen, setCartIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNavIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef, setNavIsOpen]);

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

  function handleClick() {
    setNavIsOpen(true);
  }

  function toggleCartModal() {
    setCartIsOpen((prev) => !prev);
  }

  return (
    <header
      className={`${
        scrolling
          ? "bg-white dark:bg-[#1E1E2E] dark:text-[#F8F8F2]"
          : "bg-transparent dark:bg-transparent"
      } px-5 py-3 lg:flex gap-20 flex transition-all duration-300 content-center justify-between lg:justify-center fixed w-full z-20`}
    >
      {children}
      <div onClick={handleClick} className="flex lg:hidden cursor-pointer">
        <Image src={menu} width={40} height={40} alt="Logo" />
      </div>
      <div>
        <Link href="/">
          <Image
            src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/logo.svg"
            className="w-40 dark:invert"
            width={40}
            height={40}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="justify-center lg:flex items-center">
        <ul
          ref={navRef}
          className={`${
            navIsOpen
              ? "-translate-x-0 transition-transform duration-300"
              : "lg:-translate-x-0 -translate-x-full "
          } flex gap-7 text-white lg:justify-center lg:text-[#685F78] dark:lg:text-[#F8F8F2] absolute lg:static inset-0 lg:p-0 bg-red-300 dark:bg-[#1E1E2E] w-[250px] lg:w-[720px] h-screen lg:h-0 lg:bg-inherit flex-col lg:flex-row lg:items-center `}
        >
          <li className="text-end lg:hidden bg-white dark:bg-[#282A36] w-full px-5 py-3 flex text-black dark:text-[#F8F8F2] justify-between text-xl">
            <Image
              src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/logo.svg"
              className="w-32 dark:invert"
              width={40}
              height={40}
              alt="Logo"
            />
            <span
              onClick={() => setNavIsOpen(false)}
              className="cursor-pointer"
            >
              X
            </span>
          </li>

          <li className=" lg:hidden">
            {user ? (
              <div className="items-center gap-3 flex lg:hidden justify-center">
                <UserDropDown navigation={navigation} user={user} role={role} />
              </div>
            ) : (
              <div className=" gap-3 flex justify-center">
                <a href="/api/auth/login">
                  <button
                    className={`${
                      scrolling
                        ? "bg-[#A3B1D7] text-black dark:bg-[#3A3A3A]"
                        : "bg-[#EDEDED] dark:bg-[#3A3A3A]"
                    } py-2.5 px-5 rounded-full text-black hover:bg-[#FF8B94] hover:text-white transition-all duration-500`}
                  >
                    {navigation.login}
                  </button>
                </a>
                <button className="py-2.5 px-4 border-2 border-white dark:border-[#EDEDED] rounded-full text-white dark:text-[#EDEDED] hover:bg-[#FF8B94] hover:text-white transition-all duration-300 hover:border-[#FF8B94]">
                  {navigation.register}
                </button>
              </div>
            )}
          </li>

          <li className="lg:hover:text-[#FF6575]  px-5 lg:px-0">
            <Link
              className={` ${
                pathname === "/" && "text-[#FF6575] "
              }hover:border-b-4 pb-1  lg:hover:border-0`}
              href="/"
            >
              {navigation.home}
            </Link>
          </li>
          <li className="lg:hover:text-[#FF6575] px-5 lg:px-0">
            <Link
              className={` ${
                pathname === "/courses" && "text-[#FF6575] bg-black"
              }hover:border-b-4 pb-1  lg:hover:border-0`}
              href="/courses"
            >
              {navigation.courses}
            </Link>
          </li>
          <li className="lg:hover:text-[#FF6575] px-5 lg:px-0">
            <Link
              className={` ${
                pathname === "/about" && "text-[#FF6575] bg-black"
              }hover:border-b-4 pb-1  lg:hover:border-0`}
              href="/about"
            >
              {navigation.about}
            </Link>
          </li>
          <li className="lg:hover:text-[#FF6575] px-5 lg:px-0">
            <Link
              className={` ${
                pathname === "/instructors" && "text-[#FF6575] bg-black"
              }hover:border-b-4 pb-1  lg:hover:border-0`}
              href="/instructors"
            >
              {navigation.instructors}
            </Link>
          </li>

          <li className="lg:hover:text-[#FF6575] px-5 lg:px-0">
            <Link
              className={` ${
                pathname === "/blog" && "text-[#FF6575] bg-black"
              }hover:border-b-4 pb-1  lg:hover:border-0`}
              href="/blog"
            >
              {navigation.blog}
            </Link>
          </li>
          <li className="lg:hover:text-[#FF6575] px-5 lg:px-0">
            <Link
              className={` ${
                pathname === "/contact" && "text-[#FF6575] bg-black"
              }hover:border-b-4 pb-1  lg:hover:border-0`}
              href="/contact"
            >
              {navigation.contact}
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden xl:flex gap-2 items-center relative">
        <button onClick={toggleCartModal} className="cursor-pointer">
          <Image src={cart} alt="cart" />
          {cartQuantity && (
            <span className="absolute animate-bounce transition-all duration-1500 top-0 left-4 py-0.5 text-white text-[12px] px-2 rounded-full bg-[#FF6575]">
              {cartQuantity}
            </span>
          )}
        </button>

        {/* cart dropdown menu */}

        <div>
          <CartDropDown
            quantity={navigation.quantity}
            empty={navigation.empty}
            cart={navigation.cart}
            courses={courses}
            isCartOpen={isCartOpen}
            setCartIsOpen={setCartIsOpen}
          />
        </div>

        <div>
          <LangSwitcher />
        </div>
        <div>
          <Theme />
        </div>
      </div>
      {user ? (
        <div className="items-center gap-3 hidden xl:flex">
          <UserDropDown navigation={navigation} user={user} role={role} />
        </div>
      ) : (
        <div className=" gap-3 hidden xl:flex">
          <a href="/api/auth/login">
            <button
              className={`${
                scrolling
                  ? "bg-[#B4A7F5] text-white dark:bg-[#282A36]"
                  : "bg-[#f4f4f4] dark:bg-[#282A36]"
              } py-2.5 px-9 rounded-full  hover:bg-[#FF6575] hover:text-white transition-all duration-500`}
            >
              {navigation.login}
            </button>
          </a>
          <button className="py-2.5 px-9 border-2 border-[#B4A7F5] dark:border-[#F8F8F2] rounded-full text-[#B4A7F5] dark:text-[#F8F8F2] hover:bg-[#FF6575] hover:text-white transition-all duration-300 hover:border-[#FF6575]">
            {navigation.register}
          </button>
        </div>
      )}
    </header>
  );
}
