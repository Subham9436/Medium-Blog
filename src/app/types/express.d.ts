import { User } from "../../../generated/prisma";

export namespace Express {
  export interface Request {
    user?: Pick<User, "id" | "email">;
  }
}
