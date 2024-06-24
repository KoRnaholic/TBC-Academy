"use server";
import { sql } from "@vercel/postgres";

export async function sqlGetAllPurchases() {
  try {
    const { rows } = await sql`
    SELECT 
    p.quantity,
    p.id,
    p.purchase_date,
    c.image,
    c.price,
    c.name,
    s.id as student_id,
    s.name as student_name,
    s.email as email
    FROM 
    purchases p
    JOIN 
    courses c ON p.course_id = c.id
    JOIN 
    students s ON p.student_id = s.id
;
  `;

    return rows;
  } catch (error) {
    console.error("Error fetching course information:", error);
    return null;
  }
}
