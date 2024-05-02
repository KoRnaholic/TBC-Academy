"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
