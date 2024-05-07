import AddUser from "../../../../components/UI/admin-ui/AddUser";
import TestForm from "../../../../components/UI/TestForm";

export default async function AdminPage() {
  const response = await fetch("http://localhost:3000/api/get-users", {
    next: {
      revalidate: 0, // 1 hour
    },
  });
  const data = await response.json();
  const users = data.users.rows;

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
      {/* <TestForm /> */}
      <div className=" p-10 flex justify-center items-center">
        <div className=" text-black flex flex-col gap-5  m-10">
          <AddUser users={users} />
        </div>
      </div>
    </>
  );
}
