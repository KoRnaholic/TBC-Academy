import React from "react";
import { sqlGetAllUsers } from "../../../../sql/sql-users/sqlGetAllUsers";
import Image from "next/image";
import { sqlDeleteUser } from "../../../../sql/sql-users/sqlDeleteUser";
import { getTranslations } from "next-intl/server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function Page() {
  const session = await getSession();
  const user = session?.user.role[0];

  if (user !== "Admin") {
    redirect("/");
  }
  const users = await sqlGetAllUsers();
  const t = await getTranslations("Admin.users");

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
            {t("all")}
          </h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-auto max-h-[550px] bg-white dark:bg-gray-800">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400  text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("user")}
                  </th>
                  <th className="px-5 py-3 hidden md:table-cell border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400  text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("email")}
                  </th>
                  <th className="px-5 py-3 hidden sm:table-cell border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400  text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("role")}
                  </th>
                  <th className="px-5 py-3 hidden md:table-cell border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400  text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("date")}
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400 "></th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800">
                {users?.map((user, idx) => {
                  const date = new Date(user.created_at);
                  const deleteUser = sqlDeleteUser.bind(
                    null,
                    user.role,
                    user.id
                  );

                  const options: Intl.DateTimeFormatOptions = {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                  };
                  const formattedDate = date.toLocaleString("en-US", options);
                  return (
                    <tr key={idx}>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <Image
                              src={user.image}
                              className="w-full h-full rounded-full"
                              width={50}
                              height={50}
                              alt="user-avatar"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 dark:text-gray-200 whitespace-no-wrap">
                              {user.name + " " + user.surname}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 hidden md:table-cell mt-7 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                        <p className="text-gray-900 dark:text-gray-200 whitespace-no-wrap">
                          {user.email}
                        </p>
                      </td>
                      <td className="px-5 py-5 hidden sm:table-cell border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                          <span
                            aria-hidden
                            className={`absolute inset-0 opacity-50 rounded-full ${
                              user.role === "student"
                                ? "bg-green-200 dark:bg-green-700"
                                : "bg-orange-200 dark:bg-orange-700"
                            }`}
                          ></span>
                          <span className="relative text-green-900 dark:text-green-200">
                            {user.role}
                          </span>
                        </span>
                      </td>
                      <td className="px-5 hidden md:table-cell py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
                        <p className="text-gray-900 dark:text-gray-200 whitespace-no-wrap">
                          {formattedDate}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-right">
                        <form action={deleteUser}>
                          <button
                            type="submit"
                            className="inline-block text-red-400 dark:text-red-300 p-2 border dark:border-gray-500 rounded-md hover:text-red-500 dark:hover:text-red-400"
                          >
                            {t("delete")}
                          </button>
                        </form>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
