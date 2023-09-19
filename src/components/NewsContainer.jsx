import ArticleCard from "./ArticleCard";

import { getNewsArticles } from "@/utils/get-articles";

async function NewsContainer() {
  const newsArticles = await getNewsArticles();

  return (
    <div className="container mx-auto px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
      {newsArticles.map((article) => (
        <ArticleCard
          key={article._id}
          article={article}
          bannerWidth={1200}
          bannerHeigth={675}
          type="news"
        />
      ))}
    </div>
  );
}

export default NewsContainer;
