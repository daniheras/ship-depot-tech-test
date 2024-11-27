import { db } from "@/db/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { CredentialsConfig } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";

export const findUser = async (email: string) => {
  const user = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return user[0];
};

const CredentialsProvider: CredentialsConfig = Credentials({
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" },
  },
  authorize: async (credentials: Partial<Record<"email" | "password", unknown>>) => {
    if (!credentials?.email || !credentials?.password) {
      throw new Error("Missing email or password.");
    }
    const user = await findUser(credentials.email as string);

    if (!user) {
      throw new Error("No user found with the given email.");
    }

    // Check if the password is valid
    if (user.password !== credentials.password) {
      throw new Error("Invalid password.");
    }

    return {
      id: user.id.toString(),
      email: user.email,
      image: user.image,
    }
  },
  type: "credentials",
});

export { CredentialsProvider };