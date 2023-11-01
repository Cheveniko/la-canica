import { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import { FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

import FooterLogo from "../../../public/img/bola.png";

const Footer: FC = () => {
  return (
    <footer className="bg-gradient-to-b from-cyan-950 to-canica-purple pb-8 pt-10">
      <div className="container mx-auto flex items-center px-4">
        <Link href="/">
          <Image src={FooterLogo} alt="La Canica" height={150} className="" />
        </Link>
        <div className="ms-8">
          <h2 className="text-xl font-normal md:text-2xl">
            Noticias tan falsas que en Ecuador parecen reales 🇪🇨
          </h2>
          <ul className="mt-4 hidden gap-5 text-white sm:flex">
            <li>
              <Link
                href="https://instagram.com/lacanica.ec/"
                target="_blank"
                className="text-4xl transition-all duration-300 ease-in hover:text-[#E1306C]"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tiktok.com/@la.canica.ec"
                target="_blank"
                className="text-4xl transition-all duration-300 ease-in hover:text-[#FF0050]"
              >
                <FaTiktok />
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/lacanica_ec"
                target="_blank"
                className="text-4xl transition-all duration-300 ease-in hover:text-black"
              >
                <FaXTwitter />
              </Link>
            </li>
          </ul>
          <p className="mt-4 hidden text-lg sm:inline-block md:text-xl">
            &#169; 2023 La Canica - Todos los derechos reservados
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <ul className="mt-4 flex gap-5 text-white sm:hidden">
          <li>
            <Link
              href="https://instagram.com/lacanica_ec/"
              target="_blank"
              className="text-4xl transition-all duration-300 ease-in hover:text-[#E1306C]"
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.tiktok.com/@la.canica.ec"
              target="_blank"
              className="text-4xl transition-all duration-300 ease-in hover:text-[#FF0050]"
            >
              <FaTiktok />
            </Link>
          </li>
          <li>
            <Link
              href="https://x.com/lacanica_ec"
              target="_blank"
              className="text-4xl transition-all duration-300 ease-in hover:text-black"
            >
              <FaXTwitter />
            </Link>
          </li>
        </ul>
        <p className="mt-4 text-lg sm:hidden md:text-xl">
          &#169; 2023 La Canica - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
