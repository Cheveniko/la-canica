"use client";
import { FC, useState } from "react";

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

type ShareCardProps = {
  title: string;
  slug: string;
};

const ShareCard: FC<ShareCardProps> = ({ title, slug }) => {
  const [tooltipTitle, setTooltipTitle] = useState("Copiar link");

  const baseUrl = `https://www.lacanica.ec/article/${slug}`;
  const encodedUrl = encodeURIComponent(baseUrl);
  const urlTitle = title.replace(/ /g, "+");
  const twitterHandle: string = "lacanica_ec";

  return (
    <div className="mx-auto mt-4 block w-4/5 rounded-full bg-amber-300 py-2">
      <ul className="flex items-center justify-evenly text-4xl text-gray-900">
        <li>
          <Link
            href={`https://x.com/intent/tweet?text=${urlTitle}&url=${encodedUrl}&via=${twitterHandle}`}
            target="_blank"
            className="transition duration-300 ease-in hover:text-black"
          >
            <TooltipProvider delayDuration={100}>
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
            className="transition duration-300 ease-in hover:text-black"
          >
            <TooltipProvider delayDuration={100}>
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
            className="transition duration-300 ease-in hover:text-black"
          >
            <TooltipProvider delayDuration={100}>
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
            className="transition duration-300 ease-in hover:text-black"
          >
            <TooltipProvider delayDuration={100}>
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
          <TooltipProvider delayDuration={100}>
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
};

export default ShareCard;
