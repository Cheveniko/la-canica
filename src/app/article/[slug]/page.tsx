import { Metadata, ResolvingMetadata } from "next";

import MainArticle from "@/components/MainArticle";
import NewsContainer from "@/components/NewsContainer";
import SideBar from "@/components/Sidebar";

import { getMainArticle } from "@/utils/get-articles";

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({ params }: Props) => {
  const mainArticle = await getMainArticle(params.slug);

  if (mainArticle)
    return {
      title: mainArticle.title,
      openGraph: {
        title: mainArticle.title,
        description: mainArticle.body,
        url: "https://www.lacanica.ec",
        siteName: "La Canica",
        type: "website",
        images: [
          {
            url: mainArticle.img_url,
            width: 1200,
            height: 630,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: mainArticle.title,
        description: mainArticle.body,
        site: "@lacanica_ec",
        images: [mainArticle.img_url],
      },
    };
};

export default function ArticlePage({ params }: Props) {
  return (
    <div>
      <div className="container mx-auto px-4 lg:flex">
        <MainArticle slug={params.slug} bannerWidth={1200} bannerHeight={675} />
        <SideBar />
      </div>
      <div className="container mx-auto px-4">
        <hr className="border-1 mb-4 mt-6 border-gray-200" />
      </div>
      <h2 className="pb-2 text-center text-4xl font-bold underline decoration-amber-400 underline-offset-8">
        Más Artículos
      </h2>
      <NewsContainer />
    </div>
  );
}
