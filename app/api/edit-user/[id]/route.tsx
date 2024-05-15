import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userName = searchParams.get("name");
  const email = searchParams.get("email");
  const age = searchParams.get("age");

  const id = request.nextUrl.pathname.replace("/api/edit-user/", "");

  try {
    if (!userName || !email) {
      throw new Error("User name and Email are required");
    }
    // Update user information
    await sql`UPDATE users SET name = ${userName}, email = ${email}, age = ${Number(
      age
    )} WHERE id = ${Number(id)}`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;

  return NextResponse.json({ users }, { status: 200 });
}
