"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { baseUrl } from "./[locale]/(dashboard)/admin/page";
import { User } from "../types/types";

//Login server action
export async function Login(formData: FormData) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to log in");
  }

  const user = await response.json();
  const cookieStore = cookies();
  cookieStore.set("auth", JSON.stringify(user));

  if (user.username === formData.get("username")) {
    return redirect("/");
  }
}

//LogOut server action
export async function Logout() {
  const cookieStore = cookies();
  cookieStore.delete("auth");

  return redirect("/login");
}

//Add user
export async function addUser(formData: FormData) {
  "use server";
  const name = formData.get("name");
  const email = formData.get("email");
  const age = formData.get("age");
  await fetch(
    `${baseUrl}/api/add-user?name=${name}&email=${email}&age=${age}`,
    {
      method: "GET",
    }
  );

  revalidatePath("/users");
}

//Delete user
export async function handleUserDelete(id?: number) {
  "use server";
  await fetch(`${baseUrl}/api/delete-user/${id}`, {
    method: "DELETE",
  });

  revalidatePath("/users");
}

//Edit user
export async function editUser(id: number, formData: FormData) {
  "use server";
  const name = formData.get("name");
  const email = formData.get("email");
  const age = formData.get("age");
  await fetch(
    `${baseUrl}/api/edit-user/${id}?name=${name}&email=${email}&age=${age}`,
    {
      method: "POST",
    }
  );

  revalidatePath("/users");
}

//Get all users
export async function getUsers() {
  const response = await fetch(`${baseUrl}/api/get-users`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  const users: User[] = data.users.rows;

  return users;
}
