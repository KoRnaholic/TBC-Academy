// import "../[locale]/globals.css";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";
import UserDashboard from "../../../../components/dashboard/UserDashboard";

interface DashboardLayoutProps {
  children: JSX.Element;
  params: {
    locale: string;
  };
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  unstable_setRequestLocale(params.locale);

  return (
    <div className="flex flex-col  min-h-screen bg-[#fafafa]">
      <div>
        <div
          className="mt-20 w-full h-[190px] relative bg-center bg-no-repeat bg-cover pt-12 "
          style={{
            backgroundImage: "url('/images/bg-about.png')",
            backgroundColor: "rgba(250, 246, 246, .9)",
          }}
        >
          <div className="flex flex-col  gap-3 items-center justify-center">
            <h1 className="text-5xl text-[#002058]">Dashboard</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                Home
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]">Dashboard</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center gap-10 mt-16">
        <UserDashboard />
        <main className="w-1/2">{children}</main>
      </div>
    </div>
  );
}
