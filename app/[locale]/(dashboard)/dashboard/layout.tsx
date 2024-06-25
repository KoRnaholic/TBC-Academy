// import "../[locale]/globals.css";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";
import UserDashboard from "../../../../components/dashboard/UserDashboard";

interface DashboardLayoutProps {
  children: JSX.Element;
  params: {
    locale: string;
  };
}
export interface DashboardObj {
  myprofile: string;
  courses: string;
  edit: string;
  dashboard: string;
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations("Dashboard");

  const dashboardObj = {
    myprofile: t("myprofile"),
    courses: t("courses"),
    edit: t("edit"),
    dashboard: t("link"),
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
      <div>
        <div
          className="mt-20 w-full h-[190px] relative bg-center bg-no-repeat bg-cover pt-12 dark:bg-opacity-70"
          style={{
            backgroundImage: "url('/images/bg-about.png')",
            backgroundColor: "rgba(250, 246, 246, .9)",
          }}
        >
          <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="text-5xl text-[#002058] ">{t("link")}</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058] ">
                {t("home")}
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78] ">{t("link")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row w-full justify-center gap-10 mt-16 px-5 mb-16">
        <UserDashboard dashboardObj={dashboardObj} />
        <main className="xl:w-1/2">{children}</main>
      </div>
    </div>
  );
}
