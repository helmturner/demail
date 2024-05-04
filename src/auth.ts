import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession } from "next-auth";
import { db } from "@/db";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import type { Provider } from "next-auth/providers";
// import { env } from "./env";
// import Passkey from "next-auth/providers/passkey";
// import crypto from "crypto";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface AdapterUser extends User {
    email: string;
  }

  interface Session extends DefaultSession {
    // Add custom properties to the `session` object
    user: {
      email: string;
    } & DefaultSession["user"];
  }

  interface User {
    /** Not yet implemented */
    twoFactorEnabled?: false; // TODO: implement 2FA w/ passkey
  }
}

const providers: Provider[] = [Google, GitHub /*, Passkey */];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  adapter: PrismaAdapter(db),
  // pages: {
  //   signIn: "/signin",
  //   signOut: "/signout",
  //   error: "/error",
  //   verifyRequest: "/verify-request",
  //   newUser: "/new-user",
  // },
  //  experimental: { enableWebAuthn: true },
  callbacks: {
    // signIn: async (params) => {
    //   if (params.user.twoFactorEnabled) {
    //     console.log("2FA enabled");
    //   }

    //   return true;
    // },
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
});
