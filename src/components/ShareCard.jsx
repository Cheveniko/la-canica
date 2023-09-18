"use client";
import { Tooltip } from "antd";
import Link from "next/link";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import {
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
  FaLink,
  FaFacebook,
} from "react-icons/fa6";

function ShareCard({ title, slug }) {
  const [tooltipTitle, setTooltipTitle] = useState("Copiar link");

  const baseUrl = `https://la-canica.vercel.app/article/${slug}`;
  const encodedUrl = encodeURIComponent(baseUrl);
  const urlTitle = title.replace(/ /g, "+");
  const twitterHandle = "lacanica_ec";

  return (
    <div className="block w-4/5 mx-auto bg-amber-300 rounded-full mt-4 py-2">
      <ul className="flex justify-evenly items-center text-4xl text-gray-900">
        <li>
          <Link
            href={`https://x.com/intent/tweet?text=${urlTitle}&url=${encodedUrl}&via=${twitterHandle}`}
            target="_blank"
          >
            <Tooltip title="Compartir en X">
              <FaXTwitter />
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link
            href={`https://t.me/share/url?url=${encodedUrl}&text=${urlTitle}`}
            target="_blank"
          >
            <Tooltip title="Enviar por Telegram">
              <FaTelegram />
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link
            href={`https://api.whatsapp.com/send?text=${encodedUrl} ${urlTitle}`}
            target="_blank"
          >
            <Tooltip title="Enviar por Whatsapp">
              <FaWhatsapp />
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            className="  w-32 w"
          >
            <Tooltip title="Compartir en Facebook">
              <FaFacebook />
            </Tooltip>
          </Link>
        </li>
        <li>
          <CopyToClipboard text={baseUrl}>
            <Tooltip
              title={tooltipTitle}
              overlayClassName="w-28"
              overlayInnerStyle={{ textAlign: "center" }}
              onOpenChange={() => setTooltipTitle("Copiar link")}
            >
              <FaLink
                onClick={() => setTooltipTitle("Link copiado!")}
                className="cursor-pointer"
              />
            </Tooltip>
          </CopyToClipboard>
        </li>
      </ul>
    </div>
  );
}

export default ShareCard;
