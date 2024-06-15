"use server";
import { sql } from "@vercel/postgres";

export async function sqlGetCourseComments(courseId: number) {
  try {
    const { rows } = await sql`
    SELECT cc.id, cc.comment, cc.created_at, s.name, s.image
    FROM course_comments cc
    JOIN students s ON cc.student_id = s.id
    WHERE cc.course_id = ${courseId}
    `;

    return rows;
  } catch (error) {
    console.error("Error fetching course data:", error);
    return null;
  }
}
