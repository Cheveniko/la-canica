"use client";
import { FC } from "react";

import Image from "next/image";

import { signIn } from "next-auth/react";

import { motion } from "framer-motion";

import FooterLogo from "../../../public/img/bola.png";
import TextLogo from "../../../public/img/header_logo.png";
import GoogleIcon from "../../../public/svg/google.svg";
import { FaFacebook, FaEnvelope } from "react-icons/fa6";

const LoginCard: FC = () => {
  return (
    //Alternativa de fondo bg-zinc-300 text-gray-800
    <div className="container w-5/6 rounded-xl border border-black bg-slate-300 px-0 py-10 shadow-md shadow-black md:w-fit md:px-14">
      <motion.div
        transition={{
          duration: 1,
          type: "spring",
          damping: 25,
          stiffness: 100,
        }}
        whileHover={{ rotate: 360 }}
      >
        <Image
          src={FooterLogo}
          alt="Logo de la Canica"
          className="mx-auto h-auto w-[120px] rounded-full border border-black"
        />
      </motion.div>
      <h1 className="my-8 text-center text-4xl text-black">Iniciar sesión</h1>
      <div className="flex flex-col gap-y-4">
        <button
          onClick={() => signIn("google")}
          className="mx-auto flex h-11 w-5/6 items-center rounded-md border border-[#747775] bg-white px-3 text-center text-base text-[#1F1F1F] hover:bg-neutral-200 sm:text-lg md:w-80"
        >
          <Image src={GoogleIcon} alt="Botón de iniciar sesión con Google" />
          <p className="ps-3">Continuar con Google</p>
        </button>
        <button
          onClick={() => signIn("facebook")}
          className="mx-auto flex h-11 w-5/6 items-center rounded-md border border-blue-400 bg-[#006aff] px-3 text-center text-base text-white hover:bg-blue-700 sm:text-lg md:w-80"
        >
          <FaFacebook className="h-5 w-5" />
          <p className="ps-3">Continuar con Facebook</p>
        </button>
        <button
          onClick={() => signIn("email")}
          className="mx-auto flex h-11 w-5/6 items-center rounded-md border border-black bg-amber-400 px-3 text-center text-base text-neutral-950 hover:bg-amber-500 sm:text-lg md:w-80"
        >
          <FaEnvelope className="h-5 w-5" />
          <p className="ps-3">Continuar con Email</p>
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
