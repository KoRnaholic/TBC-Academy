"use server";
import { sql } from "@vercel/postgres";
import { Course } from "../../../types/types";

// studentId: string, courseId: number
export async function sqlCreatePurchase(courses: Course[] | null) {
  try {
    if (courses)
      for (let i = 0; i <= courses.length; i++) {
        await sql`
           INSERT INTO purchases (student_id, course_id, quantity)
          VALUES (${courses[i].student_id},${courses[i].course_id}, ${courses[i].quantity} )
       `;
      }
  } catch (error) {
    console.error("Error adding to purchases:", error);
  }
}
