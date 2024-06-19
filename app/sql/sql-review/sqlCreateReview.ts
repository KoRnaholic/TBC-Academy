"use server";
import { sql } from "@vercel/postgres";
import { getSession } from "@auth0/nextjs-auth0";

// studentId: string, courseId: number
export async function sqlCreateReview({
  courseId,
  rating,
  comment,
}: {
  courseId: number;
  rating: number;
  comment: string;
}) {
  const data = await getSession();
  const studentId = data?.user.sub;
  try {
    await sql`
           INSERT INTO reviews (student_id, course_id, rating, comment)
          VALUES (${studentId},${courseId}, ${rating},${comment} )
       `;
  } catch (error) {
    console.error("Error adding to reviews:", error);
  }
}
