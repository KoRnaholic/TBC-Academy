import { sql } from "@vercel/postgres";

export async function sqlGetDislikes(reviewId: number) {
  try {
    const { rows } = await sql`SELECT COUNT(*) AS dislike_count
    FROM dislikes
    WHERE review_id = ${reviewId};
    
`;
    return rows;
  } catch (error) {
    console.error("Error getting to dislikes:", error);
  }

  return;
}
