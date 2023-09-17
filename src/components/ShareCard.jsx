import Link from "next/link";
import {
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
  FaLink,
  FaFacebook,
} from "react-icons/fa6";

function ShareCard() {
  return (
    <div className="block w-4/5 mx-auto bg-amber-300 rounded-full mt-4 py-2">
      <ul className="flex justify-evenly items-center text-4xl text-gray-900">
        <li>
          <Link href="#">
            <FaXTwitter />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaTelegram />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaWhatsapp />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaLink />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ShareCard;
