"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { CreatedCourse } from "../../../types/types";

export async function sqlAddCourse({
  name,
  lessons,
  price,
  duration,
  overview,
  image,
  course_link,
  requirements,
  audience,
  what_to_learn,
}: CreatedCourse) {
  const data = await getSession();
  const instructorId: string = data?.user.sub;

  try {
    const { rows } = await sql`
    INSERT INTO courses
    (name, instructor_id, lessons, duration, image, overview, price, course_link, requirements, audience, what_to_learn)
    VALUES 
    (${name}, ${instructorId}, ${lessons}, ${duration}, ${image}, ${overview}, ${price}, ${course_link},${requirements},${audience},${what_to_learn});
    `;

    // revalidatePath("/blog");
    return rows;
  } catch (error) {
    console.error("Error adding course:", error);
    return null;
  }
}
