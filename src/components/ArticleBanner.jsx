import Image from "next/image";

function ArticleBanner({ img_url, title, width, height }) {
  return (
    <>
      <Image
        src={img_url}
        alt={title}
        width={width}
        height={height}
        className="rounded-xl"
      />
    </>
  );
}

export default ArticleBanner;
