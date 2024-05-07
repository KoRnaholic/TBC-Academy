import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userName = searchParams.get("name");
  const email = searchParams.get("email");
  const age = searchParams.get("age");

  try {
    if (!userName || !email)
      throw new Error("User name and Email are required");
    await sql`INSERT INTO Users (Name, Email, Age) VALUES (${userName}, ${email}, ${age});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ users }, { status: 200 });
}
