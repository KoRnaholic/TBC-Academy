import { NextResponse } from "next/server";

import createIntlMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ["en", "ka"],

//   // Used when no locale matches
//   defaultLocale: "en",
// });

const protectedRoutes = [
  "/",
  "/en",
  "/ka",
  "/profile",
  "/contact",
  "/products",
  "/blog",
  "/about",
];

const publicRoutes = ["/login"];

export default async function middleware(request) {
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

  if (path === "/" && cookie) {
    return NextResponse.redirect(new URL("/en", request.nextUrl));
  }

  //Middleware for internationalization
  const defaultLocale = request.headers.get("ka") || "en";

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "ka"],
    defaultLocale,
  });
  const response = handleI18nRouting(request);

  // Step 3: Alter the response (example)
  response.headers.set("ka", defaultLocale);

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    "/",
    "/(ka|en)/:path*",
  ],
};
