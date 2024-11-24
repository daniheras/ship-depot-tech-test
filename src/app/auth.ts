import NextAuth from "next-auth"
import { CredentialsProvider } from "./(auth)/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider
  ],
})