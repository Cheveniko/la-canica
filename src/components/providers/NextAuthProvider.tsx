"use client";
import { FC, ReactNode } from "react";

import { SessionProvider } from "next-auth/react";

type NextAuthProviderProps = {
  children: ReactNode;
};

const NextAuthProvider: FC<NextAuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
