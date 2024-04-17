import { NextResponse } from "next/server";

export function middleware(request) {
  const cookie = request.cookies.get("auth");

  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/products/(.*)",
    "/blog/(.*)",
    "/profile",
    "/contact",
    "/products",
    "/blog",
    "/about",
  ],
};
