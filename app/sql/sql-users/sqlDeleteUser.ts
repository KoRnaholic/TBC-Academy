"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function sqlDeleteUser(role: string, userId: string) {
  console.log("deleted");
  try {
    if (role === "student")
      await sql`DELETE FROM students
      WHERE id = ${userId};
    `;

    if (role === "instructor") {
      await sql`DELETE FROM instructors
        WHERE id = ${userId};
      `;
    }

    revalidatePath("/admin/users");
  } catch (error) {
    console.error("Error fetching users information:", error);
    return null;
  }

  return;
}
