import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  (await cookies()).set("Bearer", "", {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 0, // Expire the cookie immediately
  });
  return NextResponse.json({
    msg: "Logout successfully",
  });
}
