import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  if (!filename || !request.body) {
    return NextResponse.json(new Error("Error while uploading image"), {
      status: 400,
    });
  }
  const blob = await put(`courses/${filename}`, request.body, {
    access: "public",
  });

  return NextResponse.json(blob);
}
