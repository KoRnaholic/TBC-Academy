import Navigation from "./Navigation";
import { sqlGetUser } from "../../app/sql/sqlGetUser";
import { getSession } from "@auth0/nextjs-auth0";
import { sqlGetCartQuantity } from "../../app/sql/sqlRequests";
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
    admin: string;
    login: string;
    register: string;
    quantity: string;
    cart: string;
    empty: string;
  };
  courses: Course[] | null;
}

export default async function Header({ navigation, courses }: HeaderProps) {
  const data = await getSession();
  const user = await sqlGetUser(data?.user.sub);
  const cartQuantity = await sqlGetCartQuantity(data?.user.sub);
  const role = data?.user.role[0];

  return (
    <Navigation
      user={user}
      cartQuantity={cartQuantity}
      navigation={navigation}
      courses={courses}
      role={role}
    >
      {/* <nav className="flex justify-between sm:gap-10 xl:gap-32 "></nav> */}
      <div className="hidden"></div>
    </Navigation>
  );
}
