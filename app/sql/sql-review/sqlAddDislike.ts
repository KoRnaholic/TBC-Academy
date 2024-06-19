"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

// studentId: string, courseId: number
export async function sqlAdddislike(reviewId: number, studentId: string) {
  try {
    await sql`
    INSERT INTO
    dislikes (review_id, student_id)
    VALUES (${reviewId}, ${studentId});
    `;

    revalidatePath("/courses");
  } catch (error) {
    console.error("Error adding to reviews:", error);
  }
}
