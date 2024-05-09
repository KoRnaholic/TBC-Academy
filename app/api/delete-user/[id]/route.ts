import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// export const dynamic = "force-dynamic";

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/delete-user/", "");

  try {
    if (!id) throw new Error("ID is required");
    await sql`DELETE FROM Users WHERE id = ${Number(id)}`;

    revalidatePath("/users");
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM Users`;

  return NextResponse.json({ users }, { status: 200 });
}
