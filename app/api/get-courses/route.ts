import { sql } from "@vercel/postgres";

import { NextResponse } from "next/server";

export const revalidate = 0;
export async function GET() {
  try {
    const courses = await sql`SELECT * FROM courses`;

    return NextResponse.json({ courses }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
