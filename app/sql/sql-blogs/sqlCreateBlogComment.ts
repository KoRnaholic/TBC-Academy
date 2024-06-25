"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

import { revalidatePath } from "next/cache";

export async function sqlCreateBlogComment({
  comment,
  blogId,
}: {
  comment: string;
  blogId: number;
}) {
  const data = await getSession();
  const studentId = data?.user.sub;

  try {
    const { rows } = await sql`
    INSERT INTO blog_comments (comment, student_id, blog_id)
    VALUES (${comment}, ${studentId}, ${blogId});
    `;

    revalidatePath("/blog");
    return rows;
  } catch (error) {
    console.error("Error adding comment:", error);
    return null;
  }
}
