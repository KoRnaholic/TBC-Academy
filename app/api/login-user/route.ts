import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const GET = async (_: NextRequest) => {
  const data = await getSession();
  console.log(data);

  if (data?.user) {
    try {
      const { name, email, picture, sub, family_name, given_name } = data.user;

      //adding user to students table if login is with gmail
      if (sub.startsWith("google")) {
        const res = await sql`SELECT * FROM students WHERE id = ${sub}`;
        if (res.rowCount === 0) {
          await sql`INSERT INTO students (id, name, surname, email, image) VALUES (${sub}, ${given_name}, ${family_name}, ${email}, ${picture})`;
        }
      }
      const role = data.user["metadata/role"];
      const surname = data.user["metadata/surname"];

      console.log(sub, name, email, role, surname, picture, data.user);

      //adding to instructos table if role is instructor
      if (role === "Instructor") {
        const res = await sql`SELECT * FROM instructors WHERE id = ${sub}`;
        if (res.rowCount === 0) {
          await sql`INSERT INTO instructors (id, name, surname, email, image) VALUES (${sub}, ${name}, ${surname}, ${email}, ${picture})`;
        }
        //adding to students table if role is student
      } else if (role === "Student") {
        const res = await sql`SELECT * FROM students WHERE id = ${sub}`;
        if (res.rowCount === 0) {
          await sql`INSERT INTO students (id, name, surname, email, image) VALUES (${sub}, ${name}, ${surname}, ${email}, ${picture})`;
        }
      }
    } catch (error) {
      console.log("error", error);
      throw error; // Optional: re-throw the error if you want it to propagate
    }

    return redirect("/");
  }
};
