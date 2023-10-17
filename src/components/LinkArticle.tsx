"use client";
import { FC } from "react";

import Link from "next/link";
// import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type LinkArticleProps = {
  slug: string;
  children: ReactNode;
};

const LinkArticle: FC<LinkArticleProps> = ({ slug, children }) => {
  // const currentPath = usePathname();
  // const href = currentPath.includes("/article")
  //   ? `/article/${slug}`
  //   : `/article/${slug}`;
  const href = `/article/${slug}`;

  return <Link href={href}>{children}</Link>;
};

export default LinkArticle;
