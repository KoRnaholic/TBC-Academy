import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(request) {
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
  cookieStore.set("auth", JSON.stringify(user));

  if (res.ok && user.username === formData.get("username")) {
    return redirect("/");
  }

  return Response.json(user);
}

export async function GET() {
  const res = await fetch("https://dummyjson.com/users");
  const data = res.json();
  return Response.json(data);
}
