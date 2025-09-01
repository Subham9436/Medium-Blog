import jwt from "jsonwebtoken";

const secret: string = process.env.JWT_SECRET || "";

export function SignJWT(email: string, userId: number) {
  const isemailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!isemailregex.test(email)) {
    throw new Error("Invalid Email");
  }

  const token = jwt.sign({ email, userId }, secret, { expiresIn: "1h" });

  return token;
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
    return decoded || null;
  } catch {
    return null;
  }
}
