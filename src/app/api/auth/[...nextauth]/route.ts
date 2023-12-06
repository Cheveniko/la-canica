import NextAuth, { AuthOptions } from "next-auth";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { clientPromise } from "@/utils/mongodb";

import { getUser } from "@/utils/get-users";
import { connectDB } from "@/utils/mongoose";
import { sendVerificationRequest } from "@/utils/sendVerificationRequest";

import { ObjectId } from "mongodb";

import { User } from "@/models/User";
import { Account, IAccount } from "@/models/Account";

import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const asingnUsername = async () => {
  await connectDB();
  const userCount = await User.countDocuments();
  return `Usuario ${userCount}`;
};

const options: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // profile(profile) {
      //   return {
      //     ...profile,
      //   };
      // },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    //@ts-ignore
    {
      id: "resend",
      type: "email",
      sendVerificationRequest,
    },
  ],
  // pages: {
  // signIn: "/login",
  // verifyRequest: "/login",
  // },
  callbacks: {
    async signIn({ user, account }) {
      await connectDB();
      const checkUser = await getUser(user?.email);
      console.log(checkUser);
      if (checkUser) {
        return true;
      }
      const userData = {
        name: user.name ?? (await asingnUsername()),
        email: user.email,
        image: user.image ?? "https://via.placeholder.com/150",
        // role: "user",
      };
      const newUser = new User(userData);
      const savedUser = await newUser.save();
      const accountData: IAccount = {
        provider: account?.provider,
        type: account?.type,
        providerAccountId: account?.providerAccountId,
        access_token: account?.access_token,
        expires_at: account?.expires_at,
        scope: account?.scope,
        token_type: account?.token_type,
        id_token: account?.id_token,
        userId: new ObjectId(savedUser._id),
      };
      const newAccount = new Account(accountData);
      await newAccount.save();
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        const signedInUser = await getUser(user.email);
        token.role = signedInUser?.role;
      }
      return token;
    },
    // async session({ session, token, user }) {
    //   session?.user?.role = user.role;
    //   return session;
    // },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
