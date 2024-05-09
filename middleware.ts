import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import createIntlMiddleware from "next-intl/middleware";
const protectedRoutes = [
  "/",
  "/en",
  "/ka",
  "/profile",
  "/contact",
  "/products",
  "/blog",
  "/about",
  "/admin",
];

const publicRoutes = ["/login"];

export default async function middleware(request: NextRequest) {
  //Middleware for rout protections
  const cookie = request.cookies.get("auth")?.value;
  // const localeValue = request.cookies.get("NEXT_LOCALE")?.value;

  const path = request.nextUrl.pathname;
  const isProtectedRoute =
    protectedRoutes.includes(path) ||
    path.includes("/blog") ||
    path.includes("/products");

  const isPublicRoute = publicRoutes.includes(path);

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  if (isPublicRoute && cookie) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  // if (path === "/" && cookie) {
  //   return NextResponse.redirect(new URL(`/${localeValue}`, request.nextUrl));
  // }

  //Middleware for internationalization
  const defaultLocale = request.headers.get("ka") || "en";
  // Step 2: Create and call the next-intl middleware (example)

  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "ka"],
    defaultLocale,
    localePrefix: "never",
  });

  const response = handleI18nRouting(request);

  // response.headers.set("ka", defaultLocale);

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    "/",
    "/(ka|en)/:path*",
  ],
};
