import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

export async function sqlReviewExists(course_id: number) {
  const data = await getSession();
  const studentId = data?.user.sub;
  const { rows } = await sql`
    SELECT EXISTS (
        SELECT 1
        FROM reviews
        WHERE course_id = ${course_id}
        AND student_id = ${studentId}
    );
    `;

  return rows;
}
