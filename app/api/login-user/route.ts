import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const GET = async (_: NextRequest) => {
  const data = await getSession();
  console.log(data);

  if (data?.user) {
    try {
      const { name, email, picture, sub } = data.user;
      const role = data.user["metadata/role"];
      const surname = data.user["metadata/surname"];

      console.log(sub, name, email, role, surname, picture, data.user);

      // const handleDatabaseOperation = async () => {
      // await sql`INSERT INTO students (id, name, surname, email, image) VALUES (${user_id}, ${name}, ${surname}, ${email}, ${picture})`;

      if (role === "Instructor") {
        const res = await sql`SELECT * FROM instructors WHERE id = ${sub}`;
        if (res.rowCount === 0) {
          await sql`INSERT INTO instructors (id, name, surname, email, image) VALUES (${sub}, ${name}, ${surname}, ${email}, ${picture})`;
        }
      } else if (role === "Student") {
        const res = await sql`SELECT * FROM students WHERE id = ${sub}`;
        if (res.rowCount === 0) {
          await sql`INSERT INTO students (id, name, surname, email, image) VALUES (${sub}, ${name}, ${surname}, ${email}, ${picture})`;
        }
      }
      // };

      // Check role and perform corresponding database operation
      // if (role === "Instructor") {
      //     await handleDatabaseOperation("instructors");
      // } else if (role === "Student") {
      //   await handleDatabaseOperation("students");
      // }
    } catch (error) {
      console.log("error", error);
      throw error; // Optional: re-throw the error if you want it to propagate
    }

    return redirect("/");
  }
};
