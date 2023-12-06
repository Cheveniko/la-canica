import { FC } from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

import { FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

type MagicLinkProps = {
  targetUrl: string;
};

export const MagicLink = (targetUrl: string) => {
  const previewText = `Inicia sesión en La Canica`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-slate-900 font-sans">
          <Container className="my-4 rounded-3xl bg-cyan-800 px-8 py-4">
            {/* <Img
                src="https://www.lacanica.ec/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbola.26ec7677.png&w=384&q=75"
                width="55"
                className=""
                alt="Logo de la Canica"
              /> */}
            <Heading className="text-3xl text-white">
              Gracias por registrarte en La Canica
            </Heading>
            <Text className="text-lg text-white">
              Da click en el siguiente botón para iniciar sesión
            </Text>
            <div className="my-8">
              <Link
                className="rounded-full bg-amber-400 px-8 py-2 text-xl font-bold text-black"
                href={targetUrl}
                target="_blank"
              >
                Iniciar sesión
              </Link>
            </div>
            {/* <Text className="text-white">
                El link tiene una duración de 30 minutos
              </Text> */}
            <Hr className="my-8" />
            <Img
              src="https://www.lacanica.ec/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader_logo.2018ddfa.png&w=384&q=75"
              width="200"
              className=""
            />
            <Text className="text-lg text-white">
              Noticias tan falsas que en Ecuador parecen reales 🇪🇨
            </Text>
            <ul className="mt-4 flex list-none gap-5 pl-0 text-white">
              <li>
                <Link
                  href="https://instagram.com/lacanica.ec/"
                  target="_blank"
                  className="text-2xl text-white"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tiktok.com/@la.canica.ec"
                  target="_blank"
                  className="text-2xl text-white"
                >
                  <FaTiktok />
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/lacanica_ec"
                  target="_blank"
                  className="text-2xl text-white"
                >
                  <FaXTwitter />
                </Link>
              </li>
            </ul>
            {/* <Text className="text-white">
                Gracias por registrarte en La Canica
              </Text> */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MagicLink;
