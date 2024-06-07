"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
// studentId: string, courseId: number
export async function sqlDeleteFromCart(courseId: number) {
  const data = await getSession();
  const studentId = data?.user.sub;

  try {
    await sql`
    DELETE FROM cart
    WHERE student_id = ${studentId}
    AND course_id = ${courseId};
    `;
  } catch (error) {
    console.error("Error deleting to cart:", error);
  }
}
