"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

// studentId: string, courseId: number
export async function sqlSubExists() {
  const data = await getSession();
  const studentId = data?.user.sub;

  try {
    // Check if the subscription already exists
    const { rowCount } = await sql`
      SELECT * FROM subscriptions WHERE student_id = ${studentId};
    `;

    if (rowCount === 0) {
      return { exists: false };
    } else {
      return { exists: true };
    }
  } catch (error) {
    console.error("Error checking/adding subscriptions:", error);
  }

  return;
}
