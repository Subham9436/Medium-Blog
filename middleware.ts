import { VerifyJWT } from "@/app/backcomponents/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token || !VerifyJWT(token)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Forward token to API routes
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-user-token", token);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

// Protect only /api/protected/*
export const config = {
  matcher: ["/api/protected/:path*"],
};
