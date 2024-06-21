"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

export async function sqlGetUserPurchases() {
  const data = await getSession();
  const studentId = data?.user.sub;
  try {
    if (studentId) {
      const { rows } = await sql`
      SELECT 
      c.id,
      p.quantity,
      p.purchase_date,
      c.image,
      c.price,
      c.name
      FROM 
      purchases p
      JOIN 
      courses c ON p.course_id = c.id
      WHERE 
      p.student_id = ${studentId};
  `;
      console.log(rows);

      return rows;
    }
  } catch (error) {
    console.error("Error fetching course information:", error);
    return null;
  }
  return;
}
