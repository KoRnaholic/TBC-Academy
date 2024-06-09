"use server";
import { sql } from "@vercel/postgres";

export async function sqlGetBlogComments(blogId: number) {
  try {
    const { rows } = await sql`
    SELECT bc.id, bc.comment, bc.created_at, s.name, s.image
    FROM blog_comments bc
    JOIN students s ON bc.student_id = s.id
    WHERE blog_id = ${blogId}
    `;

    return rows;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}
