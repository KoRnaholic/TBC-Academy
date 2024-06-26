import Image from "next/image";
import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";
import { sqlGetUser } from "../../app/sql/sqlGetUser";
import { DashboardObj } from "../../app/[locale]/(dashboard)/dashboard/layout";
import { getTranslations } from "next-intl/server";

export default async function UserDashboard({
  dashboardObj,
}: {
  dashboardObj: DashboardObj;
}) {
  const data = await getSession();
  const { sub } = data?.user || { sub: null };
  const user = await sqlGetUser(sub);
  const userInfo = user?.userInfo;

  const t = await getTranslations("Dashboard");

  return (
    <div className="flex flex-col justify-start items-center">
      <div className="xl:w-[300px]  w-full mx-auto relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg my-5">
        <div className="bg-[#FF6575]   h-32 flex items-center justify-center">
          {/* <div className="h-20 w-20 mx-auto rounded-full overflow-hidden"> */}
          <Image
            className="absolute border-4 mx-auto h-32 mt-24 w-32 border-white  rounded-full"
            src={userInfo?.image || ""}
            width={130}
            height={200}
            alt="Profile"
          />
          {/* </div> */}
        </div>
        <div className="p-4 text-center flex flex-col  items-center justify-end mt-16">
          <h2 className="text-2xl font-medium text-gray-800 dark:text-white">
            {userInfo?.name + " " + userInfo?.surname}
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mb-4">{user?.role}</p>
          {user?.role === "instructor" && (
            <Link
              href={"/dashboard/add-course"}
              className="w-full  py-3 bg-[#FF6575] text-white font-medium rounded-md hover:bg-[#e72f41] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
            >
              {t("add")}
            </Link>
          )}
        </div>
      </div>

      <div className="mt-4 w-full xl:w-[300px]">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-600 px-6 py-4 font-sans">
          <h2 className="text-xl font-bold mb-4 text-[#002058] dark:text-white">
            {dashboardObj.dashboard}
          </h2>
          <ul className="flex flex-col gap-5">
            {[
              { title: dashboardObj.dashboard, link: "dashboard" },
              { title: dashboardObj.myprofile, link: "my-profile" },
              { title: dashboardObj.courses, link: "my-courses" },
              { title: dashboardObj.edit, link: "edit-profile" },
              ,
            ].map((item) => (
              <li
                key={item?.title}
                className="flex gap-2 text-[#002058] dark:text-white items-center hover:text-[#FF6575] transition-all duration-300 cursor-pointer"
              >
                <Link href={`/dashboard/${item?.link}`}>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
