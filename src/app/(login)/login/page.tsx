import { FC } from "react";

import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";

import LoginCard from "@/components/login/LoginCard";

const LoginPage: FC = async () => {
  const session = await getServerSession();
  if (session) redirect("/profile");
  return (
    <div className="flex h-screen items-center bg-gradient-to-br from-[#191654] to-[#43C6AC]">
      <LoginCard />
    </div>
  );
};

export default LoginPage;
