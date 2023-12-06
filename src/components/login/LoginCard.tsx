"use client";
import { FC } from "react";

import Image from "next/image";

import { signIn } from "next-auth/react";

import { motion } from "framer-motion";

import { emailSignInSchema } from "@/schemas/forms-schemas";
import type { emailSignInValue } from "@/schemas/forms-schemas";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import FooterLogo from "../../../public/img/bola.png";
import TextLogo from "../../../public/img/header_logo.png";
import GoogleIcon from "../../../public/svg/google.svg";
import { FaFacebook, FaEnvelope } from "react-icons/fa6";

const LoginCard: FC = () => {
  const emailSignIn = async ({ email }: emailSignInValue) => {
    await signIn("resend", { email, callbackUrl: "http://localhost:3000" });
  };

  const form = useForm<emailSignInValue>({
    resolver: zodResolver(emailSignInSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

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
        {/* <button
          onClick={() => signIn("facebook")}
          className="mx-auto flex h-11 w-5/6 items-center rounded-md border border-blue-400 bg-[#006aff] px-3 text-center text-base text-white hover:bg-blue-700 sm:text-lg md:w-80"
        >
          <FaFacebook className="h-5 w-5" />
          <p className="ps-3">Continuar con Facebook</p>
        </button> */}
        <div className="flex items-center space-x-2">
          <hr className="flex-grow border-slate-900" />
          <span className="text-sm text-slate-600">O</span>
          <hr className="flex-grow border-slate-900" />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(emailSignIn)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="Email"
                      className="border-slate-500 text-base text-foreground ring-offset-slate-300 placeholder:text-base hover:border-slate-500 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Button
              className="mx-auto flex h-11 w-5/6 items-center rounded-md border border-black bg-amber-400 px-3 text-center text-base text-neutral-950 hover:bg-amber-500 sm:text-lg md:w-80"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              <FaEnvelope className="h-5 w-5" />
              <p className="ps-3">Continuar con Email</p>
            </Button> */}
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="flex h-11 w-5/6 items-center justify-start rounded-md border border-black bg-amber-400 px-3 text-base text-neutral-950 hover:bg-amber-500 sm:text-lg md:w-80"
            >
              <FaEnvelope className="h-5 w-5" />
              <p className="ps-3">Continuar con Email</p>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginCard;
