"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { Course } from "../../types/types";
import { revalidatePath, revalidateTag } from "next/cache";

export async function sqlGetCartItems() {
  const data = await getSession();
  const studentId = data?.user.sub;
  try {
    const { rows } = await sql`
          SELECT 
            cart.student_id,
            cart.course_id,
            cart.quantity,
            courses.*
          FROM cart
          INNER JOIN courses ON cart.course_id = courses.id
          WHERE cart.student_id = ${studentId}
          ORDER BY cart.id;
        `;

    revalidateTag("/cart");
    return rows as Course[];
  } catch (error) {
    console.error("Error fetching course information:", error);
    return null;
  }
}
