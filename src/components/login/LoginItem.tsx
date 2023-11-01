"use client";
import { FC } from "react";

import { signIn } from "next-auth/react";

import GoogleIcon from "../../../public/svg/google.svg";
import FacebookIcon from "../../../public/svg/facebook.svg";

import Image from "next/image";

type LoginItemProps = {
  provider: { name: string; style: string };
};

const LoginItem: FC<LoginItemProps> = ({ provider }) => {
  const { name, style } = provider;
  return (
    <button
      onClick={() => signIn(name)}
      className={`mx-auto my-2 flex w-1/2 items-center rounded-md text-center text-lg ${style}`}
    >
      <Image src={GoogleIcon} alt={`Botón de iniciar sesión con ${name}`} />{" "}
      Continuar con {name.charAt(0).toUpperCase() + name.slice(1)}
    </button>
  );
};

export default LoginItem;
