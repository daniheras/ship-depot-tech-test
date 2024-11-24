import { CredentialsConfig } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import UsersMockData from "@/mock/users.json";

const users = UsersMockData.data;

const findUser = async (email: string) => {
  return users.find((user) => user.email === email);
}

const CredentialsProvider: CredentialsConfig = Credentials({
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" },
  },
  authorize: async (credentials: Partial<Record<"email" | "password", unknown>>) => {
    // Verify the credentials if valid
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

    // return user object with their profile data
    return {
      id: user.id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    }
  },
  type: "credentials",
});

export { CredentialsProvider };