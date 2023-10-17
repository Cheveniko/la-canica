import { FC } from "react";

import Image from "next/image";

type ArticleBannerProps = {
  img_url: string;
  title: string;
  width: number;
  height: number;
  priority: boolean;
};

const ArticleBanner: FC<ArticleBannerProps> = ({
  img_url,
  title,
  width,
  height,
  priority,
}) => {
  return (
    <Image
      src={img_url}
      alt={title}
      width={width}
      height={height}
      priority={priority}
      className="rounded-xl"
    />
  );
};

export default ArticleBanner;
