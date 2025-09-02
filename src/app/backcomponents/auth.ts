//Auth Middleware
import { Request, Response, NextFunction } from "express";
import { DecodeJWT, VerifyJWT } from "./jwt";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();
export async function Auth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: No token Detected " });
  }
  const verify = VerifyJWT(token);
  if (!verify) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
  const decoded = DecodeJWT(token);
  if (!decoded) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
  const User = await prisma.user.findUnique({
    where: { id: decoded.id },
  });
    if (!User) { 
        return res.status(401).json({ message: "Unauthorized: User not found" });
    }
    req.user = { id: User.id, email: User.email };
    next();
}
