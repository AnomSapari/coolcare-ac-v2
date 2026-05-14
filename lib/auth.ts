import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        // ❌ Validasi input
        if (
          !credentials?.email ||
          !credentials?.password
        ) {
          throw new Error(
            "Email dan password wajib diisi"
          );
        }

        // 🔍 Cari user berdasarkan email
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // ❌ User tidak ditemukan
        if (!user) {
          throw new Error(
            "User tidak ditemukan"
          );
        }

        // 🔐 Validasi password
        const isValidPassword =
          await bcrypt.compare(
            credentials.password,
            user.password
          );

        // ❌ Password salah
        if (!isValidPassword) {
          throw new Error(
            "Password salah"
          );
        }

        // ✅ Login berhasil
        return {
          id: String(user.id),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    // 🔐 Simpan data ke JWT
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }

      return token;
    },

    // 🔐 Kirim data ke session
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }

      return session;
    },
  },
};