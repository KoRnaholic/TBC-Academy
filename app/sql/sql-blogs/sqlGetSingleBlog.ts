"use server";
import { sql } from "@vercel/postgres";

export async function sqlGetSingleBlog(blogId: string) {
  try {
    const { rows } = await sql`
    SELECT * FROM blogs
    WHERE id = ${Number(blogId)}
    `;

    return rows;
  } catch (error) {
    console.error("Error fetching course information:", error);
    return null;
  }
}
