"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function sqlDeleteCourse(courseId: number) {
  try {
    await sql`
        DELETE FROM courses
        WHERE id = ${courseId};
        `;

    revalidatePath("/admin/courses");
    return { success: true };
  } catch (error) {
    console.error("Error deleting course:", error);
    return { success: false, error };
  }
}
