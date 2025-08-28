import { UserCreationRequest, UserValidator } from "@/app/backcomponents/types";
import { PrismaClient } from "../../../../generated/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req: Request) {
  const { email, fname, lname, password }:UserCreationRequest = await req.json();
  const payload = { email, fname, lname, password };
  const parsedPayload = UserValidator.safeParse(payload);
  console.log(parsedPayload);
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

  return NextResponse.json({msg: "User created successfully", userId: newUser.id} );
}
