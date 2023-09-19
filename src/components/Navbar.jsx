import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaTiktok, FaUser } from "react-icons/fa6";
import HeaderLogo from "../../public/img/header_logo.png";

function Navbar() {
  return (
    <header>
      <nav className="fixed top-0 z-20 w-full bg-gradient-to-b from-cyan-700 to-cyan-950 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <Image src={HeaderLogo} alt="La Canica Ec" height={50} />
          </Link>
          <ul className="flex gap-5 text-white">
            <li>
              <Link
                href="https://instagram.com/lacanica_ec/"
                target="_blank"
                className="text-3xl instagram transition ease-in duration-300"
              >
                <FaInstagram />
              </Link>
            </li>
            {/* <li>
              <Link
                href="#"
                target="_blank"
                className="text-3xl hover:text-slate-700 transition ease-in-out"
              >
                <FaTiktok />
              </Link>
            </li> */}
            <li>
              <Link
                href="https://x.com/lacanica_ec"
                target="_blank"
                className="text-3xl twitter transition ease-in duration-300"
              >
                <FaXTwitter />
              </Link>
            </li>
            {/* <li>
              <Link
                href="/login"
                target="_self"
                className="text-3xl hover:text-slate-700 transition ease-in-out"
              >
                <FaUser />
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
