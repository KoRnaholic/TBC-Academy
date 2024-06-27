"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

// studentId: string, courseId: number
export async function sqlExistsInCart(courseId: number) {
  const data = await getSession();
  const studentId = data?.user.sub;

  const userRole = data?.user["metadata/role"];

  if (userRole) {
  }
  const { rows } = await sql`SELECT EXISTS (
        SELECT 1
        FROM cart
        WHERE student_id = ${studentId}
        AND course_id = ${courseId}
    );
    `;

  if (userRole === undefined || userRole === "Student") {
    return { exists: rows[0], role: "Student" };
  } else if (userRole === "Instructor") {
    return { exists: rows[0], role: "Instructor" };
  }
  return;
}
