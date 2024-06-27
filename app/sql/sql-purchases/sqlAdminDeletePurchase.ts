"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function sqlAdminDeletePurchase(
  studentId: string,
  purchaseId: number
) {
  if (studentId) {
    await sql`
    DELETE FROM
    purchases
    WHERE id = ${purchaseId}
    AND student_id = ${studentId};
      `;

    revalidatePath("/admin/purchases");
  }
}
