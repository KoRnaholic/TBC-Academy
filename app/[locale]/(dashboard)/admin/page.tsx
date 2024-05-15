import { revalidatePath } from "next/cache";
import AddUser from "../../../../components/UI/admin-ui/AddUser";
import { User } from "../../../../types/types";
import { getUsers } from "../../../actions";

import TestDropdown from "../../../../components/UI/TestDropdown";

export const baseUrl = process.env.BASE_URL;
export default async function AdminPage() {
  const users: User[] = await getUsers();
  revalidatePath("/users");

  return (
    <>
      <div className="bg-[#07212e] flex items-center justify-center h-[450px]">
        <div className="flex-col gap-8  flex ">
          <h1 className="text-[#F28123] tracking-widest text-xl">
            {/* WE DELIVER TECH DREAMS */}
          </h1>
          <h1 className="text-center text-white text-4xl sm:text-5xl ">
            Admin Panel
          </h1>
        </div>
      </div>

      {/* <div className="py-10 flex justify-center items-center"> */}
      <AddUser users={users} />
      {/* </div> */}
    </>
  );
}
