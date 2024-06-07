"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
// studentId: string, courseId: number
export async function sqlAddToCart(courseId: number) {
  const data = await getSession();
  const studentId = data?.user.sub;
  console.log(studentId, courseId);
  try {
    await sql`
            INSERT INTO cart (student_id, course_id)
            VALUES (${studentId}, ${courseId});
          `;
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
}
