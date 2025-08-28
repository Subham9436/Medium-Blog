import z from "zod";
export const PostValidator = z.object({
  title: z.string().min(3).max(255),
  content: z.string().min(3).max(10000),
  image: z.string().optional(),
});

export const UserValidator = z.object({
  email: z.email(),
  fname: z.string().min(1).max(100),
  lname: z.string().min(1).max(100),
  password: z.string().min(6).max(100),
});
export type PostCreationRequest = z.infer<typeof PostValidator>;
export type UserCreationRequest = z.infer<typeof UserValidator>;