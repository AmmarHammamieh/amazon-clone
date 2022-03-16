import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import jwt from "next-auth/jwt"

export default NextAuth({
  // Configure one or more authentication providers
  const secret = process.env.JWT_SECRET
  providers: [
    GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),
    // ...add more providers here
  ],

})
