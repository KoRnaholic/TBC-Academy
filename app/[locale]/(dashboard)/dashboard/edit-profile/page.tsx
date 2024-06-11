import UpdateUserInfoButton from "../../../../../components/UI/buttons/UpdateUserInfoButton";
import { updateUserInfo } from "../../../../actions";
import { sqlGetUser } from "../../../../sql/sqlGetUser";
import { getSession } from "@auth0/nextjs-auth0";

export default async function EditProfilePage() {
  const data = await getSession();
  const { sub } = data?.user || { sub: null };
  const { userInfo } = await sqlGetUser(sub);
  const role = data?.user["metadata/role"];
  const updateUser = updateUserInfo.bind(null, role, sub);

  //   console.log(role);
  return (
    <form action={updateUser} className="bg-white rounded-lg mt-5">
      <div className="p-5 border-b flex flex-col gap-3 ">
        <h2 className="text-2xl text-[#002058]">Profile Details</h2>
        <p className="text-gray-500 ">
          You have full control to manage your own account setting.
        </p>
      </div>
      <div className="p-5  border-b flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl text-[#002058]">Your avatar</h2>
          <p className="text-gray-500 ">
            PNG or JPG no bigger than 800px width and height.
          </p>
        </div>

        {/* image upload */}
        <div className="flex justify-between items-center cursor-pointer">
          <div className="relative group">
            <input
              type="file"
              id="image"
              name="image"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              required
            />
            <button
              type="button"
              className="w-32  text-green-500  border font-thin border-green-500 cursor-pointer
               group-hover:text-white group-hover:bg-green-500  py-2 px-4 rounded transition-all duration-300"
            >
              Upload
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="px-5 pt-5 text-2xl text-[#002058]">Personal Details</h2>
        <p className="px-5 pt-3 text-gray-500 ">
          Edit your personal information.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-12 bg-white p-5">
        <input
          name="name"
          type="text"
          className="border text-gray-600 px-4 py-2 focus:outline-none focus:border-gray-700 rounded-md"
          placeholder="First Name"
          defaultValue={userInfo.name}
          required
        />
        <input
          name="surname"
          type="text"
          className="border text-gray-600 px-4 py-2 focus:outline-none focus:border-gray-700 rounded-md"
          placeholder="Last Name"
          defaultValue={userInfo.surname}
          required
        />
        <input
          name="email"
          type="email"
          className="border text-gray-600 px-4 py-2 focus:outline-none focus:border-gray-700 rounded-md col-span-2"
          placeholder="Email"
          defaultValue={userInfo.email}
          required
        />
        <UpdateUserInfoButton />
      </div>
    </form>
  );
}
