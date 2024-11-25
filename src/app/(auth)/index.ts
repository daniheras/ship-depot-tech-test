import NextAuth from "next-auth"
import { CredentialsProvider } from "./providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
  }
})