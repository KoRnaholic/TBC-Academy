import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });

  const user = await res.json();
  const cookieStore = cookies();

  if (user.message === "Invalid credentials") {
    return redirect("/login");
  }

  cookieStore.set("auth", JSON.stringify(user));
  console.log(user.message);

  if (res.ok && user.username === formData.get("username")) {
    return redirect("/");
  }

  return new Response(JSON.stringify(user));
}

export async function GET(): Promise<Response> {
  const cookieStore = cookies();
  cookieStore.delete("auth");

  return redirect("/login");
}
