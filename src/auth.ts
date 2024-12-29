import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "@/db/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ user }) {
      if (!user?.email) {
        return false;
      }
      if (user?.email != process.env.ADMIN_EMAIL) {
        return false;
      } else {
        return true;
      }
    },
  },
  pages: {
    error: "/error",
  },
});
