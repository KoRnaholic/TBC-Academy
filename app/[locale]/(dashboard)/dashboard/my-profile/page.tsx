import { getSession } from "@auth0/nextjs-auth0";
import { sqlGetUser } from "../../../../sql/sqlGetUser";

export default async function UserProfile() {
  const data = await getSession();
  const { sub } = data?.user || { sub: null };
  const user = await sqlGetUser(sub);
  const userInfo = user?.userInfo;

  const date = new Date(data?.user.updated_at);

  return (
    <>
      <div className="w-full border bg-white dark:bg-gray-800 dark:border-gray-600 rounded-lg shadow-md p-6 my-5">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          My Profile
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-[#002058] dark:text-[#FF6575] text-lg">
              First Name
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{userInfo?.name}</p>
          </div>
          <div>
            <h3 className="text-[#002058] dark:text-[#FF6575] text-lg">
              Last Name
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {userInfo?.surname}
            </p>
          </div>
          <div>
            <h3 className="text-[#002058] dark:text-[#FF6575] text-lg">
              Registration Date
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {date.toLocaleString()}
            </p>
          </div>

          <div>
            <h3 className="text-[#002058] dark:text-[#FF6575] text-lg">
              Email
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
