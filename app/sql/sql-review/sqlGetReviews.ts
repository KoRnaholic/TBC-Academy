import { sql } from "@vercel/postgres";

export async function sqlGetReviews(courseId: number) {
  try {
    const { rows } = await sql`SELECT 
        reviews.id,
        students.name AS student_name,
        students.id AS student_id,
        students.image,
        reviews.course_id,
        reviews.rating,
        reviews.comment,
        reviews.created_at
        FROM 
        reviews
        JOIN 
        students ON reviews.student_id = students.id
        JOIN 
        courses ON reviews.course_id = courses.id
        WHERE reviews.course_id = ${courseId}
        ORDER BY id`;

    return rows;
  } catch (error) {
    console.error("Error getting to reviews:", error);
  }

  return;
}
