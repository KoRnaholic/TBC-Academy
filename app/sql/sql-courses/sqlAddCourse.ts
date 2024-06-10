"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

// import { revalidatePath } from "next/cache";

export async function sqlAddCourse({
  name,
  lessons,
  price,
  duration,
  overview,
  image,
}) {
  const data = await getSession();
  const instructorId = data?.user.sub;

  console.log(name, image, data?.user.sub);

  try {
    const { rows } = await sql`
    INSERT INTO courses (name, instructor_id, lessons, duration, image, overview, price)
    VALUES (${name}, ${instructorId}, ${lessons}, ${duration}, ${image}, ${overview}, ${price});
    `;

    // revalidatePath("/blog");
    return rows;
  } catch (error) {
    console.error("Error adding course:", error);
    return null;
  }
}
