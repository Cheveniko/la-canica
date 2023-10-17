import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import FooterLogo from "../../public/img/bola.png";

function Footer() {
  return (
    <footer className="pt-10 pb-8 bg-gradient-to-b from-cyan-950 to-canica-purple">
      <div className="container mx-auto px-4 flex items-center">
        <Link href="/">
          <Image src={FooterLogo} alt="La Canica" height={150} className="" />
        </Link>
        <div className="ms-8">
          <h2 className="text-xl md:text-2xl font-normal">
            Noticias tan falsas que en Ecuador parecen reales 🇪🇨
          </h2>
          <ul className="hidden sm:flex mt-4 gap-5 text-white">
            <li>
              <Link
                href="https://instagram.com/lacanica_ec/"
                target="_blank"
                className="text-4xl transition-all ease-in duration-300 hover:text-[#E1306C]"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tiktok.com/@la.canica.ec"
                target="_blank"
                className="text-4xl transition-all ease-in duration-300 hover:text-[#FF0050]"
              >
                <FaTiktok />
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/lacanica_ec"
                target="_blank"
                className="text-4xl transition-all ease-in duration-300 hover:text-black"
              >
                <FaXTwitter />
              </Link>
            </li>
          </ul>
          <p className="hidden sm:inline-block text-lg md:text-xl mt-4">
            &#169; 2023 La Canica - Todos los derechos reservados
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <ul className="flex sm:hidden mt-4 gap-5 text-white">
          <li>
            <Link
              href="https://instagram.com/lacanica_ec/"
              target="_blank"
              className="text-4xl transition-all ease-in duration-300 hover:text-[#E1306C]"
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.tiktok.com/@la.canica.ec"
              target="_blank"
              className="text-4xl transition-all ease-in duration-300 hover:text-[#FF0050]"
            >
              <FaTiktok />
            </Link>
          </li>
          <li>
            <Link
              href="https://x.com/lacanica_ec"
              target="_blank"
              className="text-4xl transition-all ease-in duration-300 hover:text-black"
            >
              <FaXTwitter />
            </Link>
          </li>
        </ul>
        <p className="sm:hidden text-lg md:text-xl mt-4">
          &#169; 2023 La Canica - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
