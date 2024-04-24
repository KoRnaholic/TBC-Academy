import React from "react";
import { cookies } from "next/headers";
import { useTranslations } from "next-intl";
import { userObj } from "../../types/types";

export default function ProfileInfo() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("auth");
  const jsonString = cookie?.value;
  const userObj = JSON.parse(jsonString || "");
  const { firstName, lastName, email }: userObj = userObj;
  console.log(userObj.username);

  const t = useTranslations("Profile");
  console.log(t);
  return (
    <div className="mb-4 flex flex-col md:flex-row md:justify-between">
      <div className="mb-2 md:mb-0">
        <h2 className="text-xl dark:text-white font-semibold">{t("name")}</h2>
        <p className="text-gray-700 dark:text-gray-300">{firstName}</p>
      </div>
      <div className="mb-2 md:mb-0">
        <h2 className="text-xl font-semibold dark:text-white ">
          {t("lastname")}{" "}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{lastName}</p>
      </div>
      <div className="mb-2 md:mb-0">
        <h2 className="text-xl font-semibold dark:text-white ">{t("email")}</h2>
        <p className="text-gray-700 dark:text-gray-300">{email}</p>
      </div>
    </div>
  );
}
