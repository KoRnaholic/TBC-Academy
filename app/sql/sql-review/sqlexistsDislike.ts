import { sql } from "@vercel/postgres";

export async function sqlexistsdislike(reviewId: number, studentId: string) {
  const { rows } = await sql`
    SELECT EXISTS (
        SELECT 1
        FROM dislikes
        WHERE review_id = ${reviewId}
        AND student_id = ${studentId}
    );
    `;

  return rows;
}
