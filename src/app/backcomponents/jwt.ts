import jwt from "jsonwebtoken";
import { Response } from "express";
const secret: string = process.env.JWT_SECRET || "";
export function SignJWT(email: string, userId: number, res: Response) {
  const isemailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!isemailregex.test(email)) {
    throw new Error("Invalid Email");
  }
  const token = jwt.sign({ email, userId }, secret, { expiresIn: "1h" });
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 3600000,
  });
}
export function VerifyJWT(token: string) {
  try {
    jwt.verify(token, secret);
    return true;
  } catch (err) {
    return false;
  }
}
export function DecodeJWT(token: string) {
  try {
    const decoded = jwt.decode(token);
    return decoded ? decoded : false;
  } catch (err) {
    return null;
  }
}
