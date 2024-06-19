import menu from "../../public/icons/menu.svg";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import { sqlGetUser } from "../../app/sql/sqlGetUser";
import { getSession } from "@auth0/nextjs-auth0";
import { sqlGetCartQuantity } from "../../app/sql/sqlRequests";
import { headers } from "next/headers";
import { Course } from "../../types/types";

interface HeaderProps {
  navigation: {
    home: string;
    courses: string;
    about: string;
    instructors: string;
    students: string;
    blog: string;
    contact: string;
  };
  courses: Course[] | null;
}

export default async function Header({ navigation, courses }: HeaderProps) {
  const data = await getSession();
  const user = await sqlGetUser(data?.user.sub);
  const cartQuantity = await sqlGetCartQuantity(data?.user.sub);
  const heads = headers();

  const pathname = heads.get("next-url");
  console.log(pathname);

  return (
    <Navigation user={user} cartQuantity={cartQuantity} courses={courses}>
      <nav className="flex justify-between sm:gap-10 xl:gap-32 ">
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
              <Link href="/">{navigation.home}</Link>
            </li>
            <li className="hover:text-[#FF6575] cursor-pointer">
              <Link href="/courses">{navigation.courses}</Link>
            </li>
            <li className="hover:text-[#FF6575] cursor-pointer">
              <Link href="/about">{navigation.about}</Link>
            </li>
            <li className="hover:text-[#FF6575] cursor-pointer">
              <Link href="/instructors">{navigation.instructors}</Link>
            </li>
            <li className="hover:text-[#FF6575] cursor-pointer">
              <Link href="/about">{navigation.students}</Link>
            </li>
            <li className="hover:text-[#FF6575] cursor-pointer">
              <Link href="/blog">{navigation.blog}</Link>
            </li>
            <li className="hover:text-[#FF6575] cursor-pointer">
              <Link href="/contact">{navigation.contact}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Navigation>
  );
}
