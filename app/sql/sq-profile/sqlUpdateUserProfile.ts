"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

export async function sqlUpdateUserProfile({
  name,
  surname,
  email,
  image,
  role,
  userId,
}) {
  if (role === "Student") {
    await sql`
        UPDATE students
        SET name = ${name}, surname = ${surname}, email = ${email}, image = ${image}
        WHERE id = ${userId};
        `;
  } else if (role === "Instructor") {
    await sql`
    UPDATE instructors
    SET name = ${name}, surname = ${surname}, email = ${email}, image = ${image}
    WHERE id = ${userId};
    `;
  }
  //   try {
  //     await sql`
  //         UPDATE your_table_name
  //         SET name = ${name}, surname = ${surname}, email = ${email}
  //         WHERE id = ${userId};
  //         `;
  //   } catch (error) {
  //     console.error("Error updating profile:", error);
  //     return null;
  //   }
}
