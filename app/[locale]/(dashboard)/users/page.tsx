import AddUser from "../../../../components/UI/admin-ui/AddUser";

export default async function UsersPage() {
  const response = await fetch("http://localhost:3000/api/get-users", {
    next: {
      revalidate: 0, // 1 hour
    },
  });
  const data = await response.json();
  const users = data.users.rows;

  // async function addUser(formData: any) {
  //   "use server";
  //   const name = formData.get("name");
  //   const email = formData.get("email");
  //   await fetch(
  //     `http://localhost:3000/api/add-user?name=${name}&email=${email}`,
  //     {
  //       method: "GET",
  //     }
  //   );

  //   revalidatePath("/users");
  // }

  // async function handleDelete(id: string) {
  //   "use server";
  //   await fetch(`http://localhost:3000/api/delete-user/${id}`, {
  //     method: "DELETE",
  //   });

  //   revalidatePath("/users");
  // }

  return (
    <div className="mt-[200px] text-black flex flex-col gap-5 max-w-[300px] m-10">
      <AddUser users={users} />
    </div>
  );
}
