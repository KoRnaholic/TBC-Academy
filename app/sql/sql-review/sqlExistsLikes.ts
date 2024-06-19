import { sql } from "@vercel/postgres";

export async function sqlexistsLikeOrDislike(
  reviewId: number,
  studentId: string
) {
  const { rows } = await sql`SELECT EXISTS (
    SELECT 1
    FROM (
        SELECT review_id, student_id
        FROM likes
        UNION ALL
        SELECT review_id, student_id
        FROM dislikes
    ) AS merged_table
    WHERE review_id = ${reviewId}
    AND student_id = ${studentId}
);

    `;

  return rows;
}
