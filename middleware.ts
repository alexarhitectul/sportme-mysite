import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/" || pathname === "/home") {
    const url = request.nextUrl.clone();
    url.pathname = "/about";
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith("/app")) {
    return NextResponse.redirect(new URL(pathname, "https://app.sportme.ro"));
  }

  return NextResponse.next();
}
