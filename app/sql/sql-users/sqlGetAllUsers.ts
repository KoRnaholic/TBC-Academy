"use server";
import { sql } from "@vercel/postgres";

export async function sqlGetAllUsers() {
  try {
    const { rows } =
      await sql`SELECT 'student' AS role, name, id, surname, email, image, created_at
    FROM students
    UNION
    SELECT 'instructor' AS role,name,id, surname, email, image, created_at
    FROM instructors;
    `;

    return rows;
  } catch (error) {
    console.error("Error fetching users information:", error);
    return null;
  }
}
