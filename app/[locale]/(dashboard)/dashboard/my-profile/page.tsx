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
      <div className="w-full border  bg-white rounded-lg shadow-md p-6 my-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          My Profile
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-[#002058] text-lg">First Name</h3>
            <p className="text-gray-600">{userInfo?.name}</p>
          </div>
          <div>
            <h3 className="text-[#002058] text-lg">Last Name</h3>
            <p className="text-gray-600">{userInfo?.surname}</p>
          </div>
          <div>
            <h3 className="text-[#002058] text-lg">Registration Date</h3>
            <p className="text-gray-600">{date.toLocaleString()}</p>
          </div>
          <div>
            <h3 className="text-[#002058] text-lg">Username</h3>
            <p className="text-gray-600">maia555_inasaridze@mail.ru</p>
          </div>
          <div>
            <h3 className="text-[#002058] text-lg">Email</h3>
            <p className="text-gray-600">{userInfo?.email}</p>
          </div>
          <div>
            <h3 className="text-[#002058] text-lg">Phone Number</h3>
            <p className="text-gray-600">______</p>
          </div>
          <div className="col-span-2">
            <h3 className="text-[#002058] text-lg">Bio</h3>
            <p className="text-gray-800">______</p>
          </div>
        </div>
      </div>
    </>
  );
}
