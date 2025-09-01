import { UserCreationRequest, UserValidator } from "@/app/backcomponents/types";
import { PrismaClient } from "../../../../../generated/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { SignJWT } from "@/app/backcomponents/jwt";
import type { Response } from "express";
import { cookies } from "next/headers";

const prisma = new PrismaClient();
export async function POST(req: Request, res: Response) {
  const { email, fname, lname, password }: UserCreationRequest =
    await req.json();
  const payload = { email, fname, lname, password };
  const parsedPayload = UserValidator.safeParse(payload);
  if (!parsedPayload.success) {
    return new Response("Invalid data", { status: 400 });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await prisma.user.create({
    data: {
      email,
      fname,
      lname,
      password: hashedPassword,
    },
  });
  const token = SignJWT(newUser.email, newUser.id); // Implement JWT token generation if needed
  // set cookie in Next.js
  (await cookies()).set("Bearer", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 3600, // in seconds
    path: "/",
  });

  return NextResponse.json({
    msg: "User created successfully",
    user: {
      id: newUser.id,
      email: newUser.email,
      fname: newUser.fname,
      lname: newUser.lname,
    },
    token,
  });
}


