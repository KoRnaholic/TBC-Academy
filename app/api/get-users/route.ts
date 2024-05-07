import { sql } from "@vercel/postgres";
import { revalidateTag } from "next/cache";

import { NextResponse } from "next/server";

export const revalidate = 0;
export async function GET() {
  try {
    const users = await sql`SELECT * FROM Users;`;
    revalidateTag("Users");
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
