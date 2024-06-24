// import { NextResponse } from "next/server";
import { NextResponse, type NextRequest } from "next/server";

import createIntlMiddleware from "next-intl/middleware";
import {
  withMiddlewareAuthRequired,
  getSession,
} from "@auth0/nextjs-auth0/edge";

// const protectedRoutes = [
//   "/",
//   "/en",
//   "/ka",
//   "/profile",
//   "/contact",
//   "/products",
//   "/blog",
//   "/about",
//   "/admin",
//   "/api/login",
// ];

// const publicRoutes = ["/login"];

export default withMiddlewareAuthRequired(async function middleware(
  request: NextRequest
) {
  //Middleware for rout protections
  const path = request.nextUrl.pathname;
  const res = NextResponse.next();
  const data = await getSession(request, res);

  const role = data?.user["metadata/role"];

  if (
    path.includes("/admin") &&
    (role === "Student" || role === "Instructor" || role === undefined)
  ) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  console.log(role);

  // const isProtectedRoute =
  //   protectedRoutes.includes(path) ||
  //   path.includes("/blog") ||
  //   path.includes("/products");

  // const isPublicRoute = publicRoutes.includes(path);

  // if (isProtectedRoute && !cookie) {
  //   return NextResponse.redirect(new URL("/login", request.nextUrl));
  // }
  // if (isPublicRoute && cookie) {
  //   return NextResponse.redirect(new URL("/", request.nextUrl));
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

  return response;
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    "/",
    "/(ka|en)/:path*",
  ],
};
