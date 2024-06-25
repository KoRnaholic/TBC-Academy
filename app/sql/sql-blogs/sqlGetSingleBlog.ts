"use server";
import { sql } from "@vercel/postgres";
import { BlogPost } from "../../../types/types";

export async function sqlGetSingleBlog(blogId: string) {
  try {
    const { rows } = await sql`
    SELECT * FROM blogs
    WHERE id = ${Number(blogId)}
    `;

    return rows as BlogPost[];
  } catch (error) {
    console.error("Error fetching course information:", error);
    return null;
  }
}
