/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { getServerSession } from "next-auth";

import { FaInstagram, FaXTwitter, FaTiktok, FaUser } from "react-icons/fa6";

import HeaderLogo from "../../../public/img/header_logo.png";

type NavbarProps = {
  variant: string;
};

const Navbar: FC<NavbarProps> = async ({ variant }) => {
  let background = "bg-gradient-to-b from-cyan-700 to-cyan-950";
  if (variant === "transparent") background = "bg-transparent";

  const session = await getServerSession();
  return (
    <header>
      <nav className={`fixed top-0 z-20 w-full ${background} pb-2 pt-4`}>
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/">
            <Image src={HeaderLogo} alt="La Canica Ec" height={40} />
          </Link>
          <ul className="flex gap-x-2 text-white md:gap-x-5">
            <li>
              <Link
                href="https://instagram.com/lacanica.ec/"
                target="_blank"
                className="text-3xl transition-all duration-300 ease-in hover:text-[#E1306C]"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tiktok.com/@la.canica.ec"
                target="_blank"
                className="text-3xl transition-all duration-300 ease-in hover:text-[#FF0050]"
              >
                <FaTiktok />
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/lacanica_ec"
                target="_blank"
                className="text-3xl transition-all duration-300 ease-in hover:text-black"
              >
                <FaXTwitter />
              </Link>
            </li>
            {/* {session ? (
              <div>
                <Link href="/profile">
                  <img
                    src={session.user?.image!}
                    alt="Foto de perfil"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            ) : (
              <li>
                <Link
                  href="/login"
                  target="_self"
                  className="text-3xl transition-all duration-300 ease-in hover:text-amber-400"
                >
                  <FaUser />
                </Link>
              </li>
            )} */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
