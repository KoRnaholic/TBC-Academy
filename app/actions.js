"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

//Login server action
export async function Login(formData) {
  "use server";
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });

  const user = await response.json();
  const cookieStore = cookies();
  cookieStore.set("auth", JSON.stringify(user));

  if (user.username === formData.get("username")) {
    return redirect("/");
  }
}

//LogOut server action
export async function Logout() {
  "use server";
  const cookieStore = cookies();
  cookieStore.delete("auth");

  return redirect("/login");
}
