"use server";
import { sql } from "@vercel/postgres";

export async function sqlGetCourseInstructor() {
  try {
    const { rows } = await sql`SELECT i.*
      FROM courses c
      JOIN instructors i ON c.instructor_id = i.id;
      
    `;

    return rows;
  } catch (error) {
    console.error("Error fetching users information:", error);
    return null;
  }
}
