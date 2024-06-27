"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

// studentId: string, courseId: number
export async function sqlSubscription() {
  const data = await getSession();
  const studentId = data?.user.sub;

  try {
    // Check if the subscription already exists
    const { rowCount } = await sql`
      SELECT * FROM subscriptions WHERE student_id = ${studentId};
    `;

    if (rowCount === 0) {
      // Insert the subscription if it doesn't exist
      await sql`
        INSERT INTO subscriptions (student_id, paid, created_at)
        VALUES (${studentId}, TRUE, NOW());
      `;
      console.log("Subscription added.");
    } else {
      console.log("Subscription already exists.");
    }
  } catch (error) {
    console.error("Error checking/adding subscriptions:", error);
  }
}
