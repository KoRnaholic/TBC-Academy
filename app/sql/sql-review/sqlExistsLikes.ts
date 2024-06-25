import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate = 0;

export async function sqlexistsLikeOrDislike(reviewId: number) {
  const data = await getSession();
  const studentId = data?.user.sub;
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
);`;

  revalidatePath("/courses");

  return rows;
}
