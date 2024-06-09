"use server";
import { sql } from "@vercel/postgres";

import { revalidateTag } from "next/cache";

export async function sqlGetBlogs() {
  try {
    const { rows } = await sql`SELECT * FROM blogs`;

    revalidateTag("/blog");
    return rows;
  } catch (error) {
    console.error("Error fetching course information:", error);
    return null;
  }
}
