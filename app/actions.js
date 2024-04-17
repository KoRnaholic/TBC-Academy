"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

//Login server action
export async function Login(formData) {
  try {
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
  } catch (error) {
    console.error("Error:", error.message);
    // Handle error (e.g., show an error message to the user)
  }
}

//LogOut server action
export async function Logout() {
  const cookieStore = cookies();
  cookieStore.delete("auth");

  return redirect("/login");
}
