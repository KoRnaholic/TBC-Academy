import { getSession } from "@auth0/nextjs-auth0";
import { sqlGetUser } from "../../../../sql/sqlGetUser";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "DreamLMS - My Profile",
  description:
    "View and manage your profile information on DreamLMS to personalize your learning experience.",
  keywords:
    "my profile, user profile, DreamLMS, personalization, learning experience",
};

export default async function UserProfile() {
  const data = await getSession();
  const { sub } = data?.user || { sub: null };
  const user = await sqlGetUser(sub);
  const userInfo = user?.userInfo;

  const date = new Date(data?.user.updated_at);

  const t = await getTranslations("Profile.myprofile");

  return (
    <>
      <div className="w-full border bg-white dark:bg-gray-800 dark:border-gray-600 rounded-lg shadow-md p-6 my-5">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          {t("profile")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-[#002058] dark:text-[#FF6575] text-lg">
              {t("name")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{userInfo?.name}</p>
          </div>
          <div>
            <h3 className="text-[#002058] dark:text-[#FF6575] text-lg">
              {t("lastname")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {userInfo?.surname}
            </p>
          </div>
          <div>
            <h3 className="text-[#002058] dark:text-[#FF6575] text-lg">
              {t("date")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {date.toLocaleString()}
            </p>
          </div>

          <div>
            <h3 className="text-[#002058] dark:text-[#FF6575] text-lg">
              {t("email")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {userInfo?.email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
