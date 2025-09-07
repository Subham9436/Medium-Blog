import { getUserFromToken } from "@/app/backcomponents/auth";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  const token = req.headers.get("x-user-token");
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await getUserFromToken(token);
  if (!user) {
    return NextResponse.json({ message: "Unauthorized: User not found" }, { status: 401 });
  }

  return NextResponse.json({ message: "Welcome!", user });
}
