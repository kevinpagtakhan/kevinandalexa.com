import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const restrictedPaths = ["/protected", "/admin", "/register"];

export default async function middleware(req: NextRequest): Promise<NextResponse> {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;

  // If it's the root path, just render it
  if (path === "/") {
    return NextResponse.next();
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log(path);
  if (!session && restrictedPaths.some(p => path.startsWith(p))) {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (session && (path === "/login" || path === "/register")) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }
  return NextResponse.next();
}
