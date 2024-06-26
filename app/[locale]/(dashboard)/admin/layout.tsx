import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { ReactNode } from "react";

export const metadata = {
  title: "DreamLMS - Admin Panel",
  description:
    "Access the admin panel on DreamLMS to manage users, courses, and other settings.",
  keywords:
    "admin panel, administration, manage users, manage courses, DreamLMS",
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  const t = useTranslations("Adminpanel");
  return (
    <>
      <div>
        <div
          className="mt-20 w-full h-[190px] relative bg-center bg-no-repeat bg-cover pt-12 "
          style={{
            backgroundImage: "url('/images/bg-about.png')",
            backgroundColor: "rgba(250, 246, 246, .9)",
          }}
        >
          <div className="flex flex-col  gap-3 items-center justify-center">
            <h1 className="text-5xl text-[#002058]">{t("link")}</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                {t("home")}
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]">{t("link")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <nav className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 shadow-lg">
          <ul className="flex justify-center items-center gap-20">
            <li className="hover:text-red-400">
              <Link href="/admin/courses">{t("courses")}</Link>
            </li>
            <li className="hover:text-red-400">
              <Link href="/admin/users">{t("users")}</Link>
            </li>
            <li className="hover:text-red-400">
              <Link href="/admin/blogs">{t("blogs")}</Link>
            </li>
            <li className="hover:text-red-400">
              <Link href="/admin/purchases">{t("purchases")}</Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="flex-1 lg:p-6 ">{children}</main>
    </>
  );
}
