import React from "react";
import { sqlGetAllUsers } from "../../../../sql/sql-users/sqlGetAllUsers";
import Image from "next/image";
import { sqlDeleteUser } from "../../../../sql/sql-users/sqlDeleteUser";

export const revalidate = 0;

export default async function Page() {
  const users = await sqlGetAllUsers();

  // console.log(users);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">All Users</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg  overflow-auto max-h-[550px]">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-xs font-semibold text-[#002058] uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-xs font-semibold text-[#002058] uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-xs font-semibold text-[#002058] uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-xs font-semibold text-[#002058] uppercase tracking-wider">
                    Created At
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200"></th>
                </tr>
              </thead>
              <tbody>
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
                      <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                        <div className="flex items-center ">
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
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.name + " " + user.surname}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {user.email}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                        <span
                          className={`relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight`}
                        >
                          <span
                            aria-hidden
                            className={`${
                              user.role === "student"
                                ? "bg-green-200"
                                : "bg-orange-200"
                            } absolute inset-0  opacity-50 rounded-full`}
                          ></span>
                          <span className="relative">{user.role}</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {formattedDate}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                        <form action={deleteUser}>
                          <button
                            type="submit"
                            className="inline-block text-red-400 p-2 border rounded-md hover:text-red-500"
                          >
                            Delete
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
