"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function LinkArticle({ slug, children }) {
  const currentPath = usePathname();
  // const href = currentPath.includes("/article")
  //   ? `/article/${slug}`
  //   : `/article/${slug}`;
  const href = `/article/${slug}`;

  return <Link href={href}>{children}</Link>;
}

export default LinkArticle;
