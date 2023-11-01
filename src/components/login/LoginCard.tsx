import { FC } from "react";

import Image from "next/image";

import LoginItem from "./LoginItem";
import FooterLogo from "../../../public/img/bola.png";
import TextLogo from "../../../public/img/header_logo.png";

const signInProviders = [
  { name: "google", style: "border border-[#747775] text-[#1F1F1F] bg-white" },
  { name: "facebook", style: "bg-[#006aff]" },
  { name: "email", style: "" },
];

const LoginCard: FC = () => {
  return (
    <div className="container w-1/3 rounded-lg border border-white px-8 py-4">
      <Image
        src={FooterLogo}
        alt="Logo de la Canica"
        className="mx-auto h-auto w-[120px]"
      />
      <h1 className="my-8 text-center text-4xl">Iniciar sesión</h1>
      {signInProviders.map((provider, index) => (
        <LoginItem key={index} provider={provider} />
      ))}
    </div>
  );
};

export default LoginCard;
