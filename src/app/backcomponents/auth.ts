import { PrismaClient } from "../../../generated/prisma";
import { DecodeJWT } from "./jwt";


const prisma= new PrismaClient(); 
export async function getUserFromToken(token: string) {
  const decoded = DecodeJWT(token);
  if (!decoded) return null;

  return await prisma.user.findUnique({
    where: { id: decoded.id },
    select: { id: true, email: true },
  });
}
