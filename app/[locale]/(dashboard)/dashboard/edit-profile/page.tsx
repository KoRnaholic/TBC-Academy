import { getTranslations } from "next-intl/server";
import UpdateUserInfoButton from "../../../../../components/UI/buttons/UpdateUserInfoButton";
import { updateUserInfo } from "../../../../actions";
import { sqlGetUser } from "../../../../sql/sqlGetUser";
import { getSession } from "@auth0/nextjs-auth0";

export const metadata = {
  title: "DreamLMS - Edit Profile",
  description:
    "Update your profile information on DreamLMS to keep your account details current.",
  keywords:
    "edit profile, update profile, DreamLMS, account information, user settings",
};

export default async function EditProfilePage() {
  const data = await getSession();
  const { sub } = data?.user || { sub: null };
  const user = await sqlGetUser(sub);
  const userInfo = user?.userInfo;
  const role = data?.user["metadata/role"];
  const updateUser = updateUserInfo.bind(null, role, sub, userInfo?.image);
  const t = await getTranslations("Profile.editprofile");

  const update = t("update");
  const updating = t("updating");
  return (
    <form
      action={updateUser}
      className="bg-white dark:bg-gray-800 rounded-lg mt-5 border dark:border-gray-600"
    >
      <div className="p-5 border-b flex flex-col gap-3">
        <h2 className="text-2xl text-[#002058] dark:text-white">
          {t("details")}
        </h2>
        <p className="text-gray-500 dark:text-gray-400">{t("control")}</p>
      </div>
      <div className="p-5 border-b flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl text-[#002058] dark:text-white">
            {t("avatar")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">{t("image")}</p>
        </div>

        {/* image upload */}
        <div className="flex justify-between items-center cursor-pointer">
          <div className="relative group">
            <input
              type="file"
              id="image"
              name="image"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <button
              type="button"
              className="w-32 text-green-500 border font-thin border-green-500 cursor-pointer
            group-hover:text-white group-hover:bg-green-500 py-2 px-4 rounded transition-all duration-300"
            >
              {t("upload")}
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="px-5 pt-5 text-2xl text-[#002058] dark:text-white">
          {t("personal")}
        </h2>
        <p className="px-5 pt-3 text-gray-500 dark:text-gray-400">
          {t("editpersonal")}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-12 bg-white dark:bg-gray-800 p-5">
        <input
          name="name"
          type="text"
          className="border text-gray-600 dark:text-gray-400 px-4 py-2 focus:outline-none focus:border-gray-700 dark:focus:border-gray-600 rounded-md"
          placeholder="First Name"
          defaultValue={userInfo?.name}
          required
        />
        <input
          name="surname"
          type="text"
          className="border text-gray-600 dark:text-gray-400 px-4 py-2 focus:outline-none focus:border-gray-700 dark:focus:border-gray-600 rounded-md"
          placeholder="Last Name"
          defaultValue={userInfo?.surname}
          required
        />
        <input
          name="email"
          type="email"
          className="border text-gray-600 dark:text-gray-400 px-4 py-2 focus:outline-none focus:border-gray-700 dark:focus:border-gray-600 rounded-md col-span-2"
          placeholder="Email"
          defaultValue={userInfo?.email}
          required
        />
        <UpdateUserInfoButton updating={updating} update={update} />
      </div>
    </form>
  );
}
