import MainArticle from "@/components/MainArticle";
import NewsContainer from "@/components/NewsContainer";
import SideBar from "@/components/Sidebar";

import { getMainArticle } from "@/utils/get-articles";

export const generateMetadata = async ({ params }) => {
  const mainArticle = await getMainArticle(params.slug);

  return {
    title: mainArticle.title,
    openGraph: {
      description: mainArticle.body,
      url: "https://lacanica.ec",
      siteName: "La Canica",
    },
  };
};

function ArticlePage({ params }) {
  return (
    <main className="bg-cyan-950 py-4">
      <div className="container mx-auto flex">
        <MainArticle slug={params.slug} bannerWidth={1200} bannerHeigth={300} />
        <SideBar />
      </div>
      <div className="container mx-auto">
        <hr className="border-1 border-gray-200 mt-6 mb-4" />
      </div>
      <h2 className="text-4xl pb-2 font-bold text-center underline underline-offset-8 decoration-amber-400">
        Más Artículos
      </h2>
      <NewsContainer />
    </main>
  );
}

export default ArticlePage;
