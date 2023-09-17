import Image from "next/image";

function ArticleBanner({ img_url, title, width, height, priority }) {
  return (
    <>
      <Image
        src={img_url}
        alt={title}
        width={width}
        height={height}
        priority={priority}
        className="rounded-xl"
      />
    </>
  );
}

export default ArticleBanner;
