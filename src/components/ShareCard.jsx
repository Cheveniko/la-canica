"use client";
import { useState } from "react";

import Link from "next/link";

import CopyToClipboard from "react-copy-to-clipboard";

import {
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
  FaLink,
  FaFacebook,
} from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function ShareCard({ title, slug }) {
  const [tooltipTitle, setTooltipTitle] = useState("Copiar link");

  const baseUrl = `https://www.lacanica.ec/article/${slug}`;
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
            className="transition ease-in duration-300 hover:text-black"
          >
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <FaXTwitter />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Compartir en X</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </li>
        <li>
          <Link
            href={`https://t.me/share/url?url=${encodedUrl}&text=${urlTitle}`}
            target="_blank"
            className="transition ease-in duration-300 hover:text-black"
          >
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <FaTelegram />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Enviar por Telegram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </li>
        <li>
          <Link
            href={`https://api.whatsapp.com/send?text=${encodedUrl} ${urlTitle}`}
            target="_blank"
            className="transition ease-in duration-300 hover:text-black"
          >
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <FaWhatsapp />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Enviar por Whatsapp</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </li>
        <li>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            className="transition ease-in duration-300 hover:text-black"
          >
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <FaFacebook />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Compartir en Facebook</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </li>
        <li>
          <TooltipProvider delayDuration={200}>
            <Tooltip
              onOpenChange={() =>
                setTimeout(() => {
                  setTooltipTitle("Copiar link");
                }, 100)
              }
            >
              <CopyToClipboard text={baseUrl}>
                <TooltipTrigger
                  asChild
                  onClick={(e) => {
                    setTooltipTitle("¡Link copiado!");
                    e.preventDefault();
                  }}
                >
                  <span>
                    <FaLink className="cursor-pointer" />
                  </span>
                </TooltipTrigger>
              </CopyToClipboard>
              <TooltipContent>
                <p>{tooltipTitle}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      </ul>
    </div>
  );
}

export default ShareCard;
