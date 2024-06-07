import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import { NextResponse } from "next/server";

export const revalidate = 0;
export async function GET() {
  const data = await getSession();

  if (data) {
    const userId = data.user.sub;
    try {
      const user = await sql`SELECT * FROM instructors WHERE id = ${userId};`;
      if (user.rows[0].quantity === 0) {
        const user = await sql`SELECT * FROM students;`;
        return NextResponse.json({ user }, { status: 200 });
      }
      revalidateTag("dashboard");
      return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }

  return redirect("/dashboard");
}
