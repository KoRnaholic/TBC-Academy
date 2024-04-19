import { NextResponse } from "next/server";

const protectedRoutes = [
  "/",
  "/profile",
  "/contact",
  "/products",
  "/blog",
  "/about",
];

const publicRoutes = ["/login"];

export function middleware(request) {
  const cookie = request.cookies.get("auth")?.value;

  const path = request.nextUrl.pathname;
  const isProtectedRoute =
    protectedRoutes.includes(path) ||
    path.includes("/blog") ||
    path.includes("/products");

  const isPublicRoute = publicRoutes.includes(path);
  console.log(cookie);

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (isPublicRoute && cookie) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
