import React from "react";
import { cookies } from "next/headers";

export default function ProfileInfo() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("auth");
  console.log(cookie?.value);
  const jsonString = cookie?.value;

  const userObj = JSON.parse(jsonString);
  const { firstName, lastName, email } = userObj;
  console.log(userObj.username);
  return (
    <div className="mb-4 flex flex-col md:flex-row md:justify-between">
      <div className="mb-2 md:mb-0">
        <h2 className="text-xl dark:text-white font-semibold">Name</h2>
        <p className="text-gray-700 dark:text-gray-300">{firstName}</p>
      </div>
      <div className="mb-2 md:mb-0">
        <h2 className="text-xl font-semibold dark:text-white ">Last Name </h2>
        <p className="text-gray-700 dark:text-gray-300">{lastName}</p>
      </div>
      <div className="mb-2 md:mb-0">
        <h2 className="text-xl font-semibold dark:text-white ">Email</h2>
        <p className="text-gray-700 dark:text-gray-300">{email}</p>
      </div>
    </div>
  );
}
