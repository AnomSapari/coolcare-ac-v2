import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {

  const token = req.nextauth.token;
  const pathname = req.nextUrl.pathname;

  // ❗ kalau belum ada role → paksa ke login
  if (!token?.role) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🔵 ADMIN tidak boleh ke technician
  if (token.role === "ADMIN" && pathname.startsWith("/technician")) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // 🟢 TEKNISI tidak boleh ke admin
  if (token.role === "TEKNISI" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/technician", req.url));
  }

  return NextResponse.next();
}, {
  callbacks: {
    authorized: ({ token }) => {
      return !!token;
    },
  },
});

export const config = {
  matcher: ["/admin/:path*", "/technician/:path*"],
};