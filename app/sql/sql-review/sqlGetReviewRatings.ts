import { sql } from "@vercel/postgres";

export async function sqlgetReviewRatings(courseId: number) {
  const { rows } = await sql`
  SELECT course_id, AVG(rating) AS average_rating
    FROM reviews
    WHERE course_id = ${courseId}
    GROUP BY course_id;
`;

  if (rows.length > 0) {
    const averageRating = parseFloat(rows[0].average_rating).toFixed(1);
    return {
      course_id: rows[0].course_id,
      average_rating: Number(averageRating),
    };
  } else {
    return null; // or handle the case where no rows are found
  }
}
