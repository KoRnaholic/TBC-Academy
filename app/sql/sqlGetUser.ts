"use server";
import { QueryResultRow, sql } from "@vercel/postgres";

interface UserInfo {
  id: string;
  name: string;
  surname: string;
  email: string;
  course_id: string | null;
  image: string;
}

export interface UserObject {
  userInfo: UserInfo | QueryResultRow;
  role: string;
}

export async function sqlGetUser(userId: string) {
  let user;

  try {
    // Check if user exists in the instructors table
    const instructorUser =
      await sql`SELECT * FROM instructors WHERE id = ${userId};`;
    if (instructorUser.rows.length > 0) {
      const user: UserObject | undefined = {
        userInfo: instructorUser.rows[0],
        role: "instructor",
      };
      return user;
    }

    // If user is not found in instructors table, check students table
    const studentUser = await sql`SELECT * FROM students WHERE id = ${userId};`;
    if (studentUser.rows.length > 0) {
      const user: UserObject | undefined = {
        userInfo: studentUser.rows[0],
        role: "student",
      };
      return user;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }

  return user;
}
