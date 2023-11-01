import { FC } from "react";

import Image from "next/image";

import LoginCard from "@/components/login/LoginCard";

const LoginPage: FC = () => {
  return (
    <div className="flex h-screen items-center bg-gradient-to-br from-[#191654] to-[#43C6AC]">
      <LoginCard />
    </div>
  );
};

export default LoginPage;
