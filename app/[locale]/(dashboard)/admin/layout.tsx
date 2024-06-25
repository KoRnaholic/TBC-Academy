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
            <h1 className="text-5xl text-[#002058]">Admin Panel</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                Home
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]">Admin Panel</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <nav className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 shadow-lg">
          <ul className="flex justify-center gap-20">
            <li className="mb-4">
              <Link href="/admin/courses">Courses</Link>
            </li>
            <li className="mb-4">
              <Link href="/admin/users">Users</Link>
            </li>
            <li className="mb-4">
              <Link href="/admin/blogs">Blogs</Link>
            </li>
            <li className="mb-4">
              <Link href="/admin/purchases">Purchases</Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="flex-1 lg:p-6 ">{children}</main>
    </>
  );
}
