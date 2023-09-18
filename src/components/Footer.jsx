import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import FooterLogo from "../../public/img/bola.png";

function Footer() {
  return (
    <footer className="pt-10 pb-8 bg-gradient-to-b from-cyan-950 to-canica-purple">
      <div className="container mx-auto flex">
        <Link href="/">
          <Image src={FooterLogo} alt="La Canica" height={150} />
        </Link>
        <div className="ms-8">
          <h2 className="text-2xl font-normal">
            Noticias tan falsas que en Ecuador parecen reales 🇪🇨
          </h2>
          <ul className="flex mt-4 gap-5">
            <li>
              <Link
                href="https://instagram.com/lacanica_ec/"
                target="_blank"
                className="text-white text-4xl hover:text-slate-700 transition ease-in-out"
              >
                <FaInstagram />
              </Link>
            </li>
            {/* <li>
              <Link
                href="#"
                target="_blank"
                className="text-white text-4xl hover:text-slate-700 transition ease-in-out"
              >
                <FaTiktok />
              </Link>
            </li> */}
            <li>
              <Link
                href="https://twitter.com/lacanica_ec"
                target="_blank"
                className="text-white text-4xl hover:text-slate-700 transition ease-in-out"
              >
                <FaXTwitter />
              </Link>
            </li>
          </ul>
          <p className="text-xl mt-4">
            &#169; 2023 La Canica - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
