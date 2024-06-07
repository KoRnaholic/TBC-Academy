"use server";
import { sql } from "@vercel/postgres";

export async function sqlGetUser(userId: string) {
  let user;

  try {
    // Check if user exists in the instructors table
    const instructorUser =
      await sql`SELECT * FROM instructors WHERE id = ${userId};`;
    if (instructorUser.rows.length > 0) {
      return { userInfo: instructorUser.rows[0], role: "instructor" };
    }

    // If user is not found in instructors table, check students table
    const studentUser = await sql`SELECT * FROM students WHERE id = ${userId};`;
    if (studentUser.rows.length > 0) {
      return { userInfo: studentUser.rows[0], role: "student" };
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }

  return user;
}
