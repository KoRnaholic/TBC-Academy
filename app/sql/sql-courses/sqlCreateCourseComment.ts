"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

import { revalidatePath } from "next/cache";

export async function sqlCreateCourseComment({
  comment,
  courseId,
}: {
  comment: string;
  courseId: number;
}) {
  const data = await getSession();
  const studentId = data?.user.sub;

  try {
    const { rows } = await sql`
    INSERT INTO course_comments (comment, student_id, course_id)
    VALUES (${comment}, ${studentId}, ${courseId});
    `;

    revalidatePath("/courses");
    return rows;
  } catch (error) {
    console.error("Error adding comment:", error);
    return null;
  }
}
