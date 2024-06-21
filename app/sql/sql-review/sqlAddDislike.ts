"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

// studentId: string, courseId: number
export async function sqlAdddislike(reviewId: number) {
  const data = await getSession();
  const studentId = data?.user.sub;
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
