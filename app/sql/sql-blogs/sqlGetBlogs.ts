"use server";
import { sql } from "@vercel/postgres";

import { revalidateTag } from "next/cache";
import { BlogPost } from "../../../types/types";

export async function sqlGetBlogs() {
  try {
    const { rows } = await sql`SELECT * FROM blogs`;

    revalidateTag("/blog");
    return rows as BlogPost[];
  } catch (error) {
    console.error("Error fetching course information:", error);
    return null;
  }
}
