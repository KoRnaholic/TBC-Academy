import { sql } from "@vercel/postgres";

export async function sqlGetLikes(reviewId: number) {
  try {
    const { rows } = await sql`SELECT COUNT(*) AS like_count
    FROM likes
    WHERE review_id = ${reviewId};
    
`;

    return rows;
  } catch (error) {
    console.error("Error getting to reviews:", error);
  }

  return;
}
