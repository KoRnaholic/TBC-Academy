"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export interface EditCourse {
  courseName: string;
  lessons: number;
  price: number | string;
  duration: string;
  overview: string;
  courseId: number;
}

export async function sqlEditCourse({
  courseName,
  lessons,
  price,
  duration,
  overview,
  courseId,
}: EditCourse) {
  try {
    const { rows } = await sql`
        UPDATE courses
        SET 
        name = ${courseName},
        lessons = ${lessons},
        price = ${price},
        duration = ${duration},
        overview = ${overview}
        WHERE id = ${courseId};
        `;

    revalidatePath("/admin/courses");
    return rows;
  } catch (error) {
    console.error("Error editing course:", error);
    return null;
  }
}
