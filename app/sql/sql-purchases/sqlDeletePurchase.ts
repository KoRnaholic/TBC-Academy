"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

export async function sqlDeletePurchase(courseId: number) {
  const data = await getSession();
  const studentId = data?.user.sub;

  console.log(studentId);

  if (studentId) {
    await sql`
    DELETE FROM
    purchases
    WHERE id = ${courseId}
    AND student_id = ${studentId};
      `;
  }
}
