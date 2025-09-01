import { UserCreationRequest, UserValidator } from "@/app/backcomponents/types";
import { PrismaClient } from "../../../../../generated/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { SignJWT } from "@/app/backcomponents/jwt";
import type { Response } from "express";
import { cookies } from "next/headers";


const prisma = new PrismaClient();


export async function POST(req: Request, res: Response) {
  const { email, password } = await req.json();
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (!existingUser) {
    return new Response("Invalid credentials", { status: 401 });
  }
  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid) {
    return new Response("Invalid credentials", { status: 401 });
  }
  const token = SignJWT(existingUser.email, existingUser.id);
  (await cookies()).set("Bearer", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 3600, // in seconds
  });
  return NextResponse.json({
    msg: "User Sign-in successfully",
    user: {
      id: existingUser.id,
      email: existingUser.email,
      fname: existingUser.fname,
      lname: existingUser.lname,
    },
    token,
  });
}
