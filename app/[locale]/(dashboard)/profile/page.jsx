// "use client";
// import React, { useState } from "react";
import Button from "@/components/UI/Button";
import ProfileInfo from "@/components/UI/ProfileInfo";
import { useTranslations } from "next-intl";

export default function Profile() {
  // const [password, setPassword] = useState("");
  // const [confPassword, setConfPassword] = useState("");
  // console.log(password, confPassword);
  const t = useTranslations("Profile");
  console.log(t);
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-gradient-to-r lg:mt-8 p-4 md:p-8 rounded-lg shadow-lg w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 dark:bg-gray-800">
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            {t("profileinfo")}
          </h1>

          <ProfileInfo />
        </div>

        <form className="mb-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("password")}
            </label>
            <input
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("confirmpassword")}
            </label>
            <input
              // value={confPassword}
              // onChange={(e) => setConfPassword(e.target.value)}
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm dark:bg-gray-700 dark:text-white"
            />
          </div>

          <Button
            type="submit"
            styles="w-full bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-700 text-white py-2 px-4 rounded-md hover:bg-slate-800 focus:outline-none"
          >
            {t("save")}
          </Button>
        </form>
      </div>
    </div>
  );
}
