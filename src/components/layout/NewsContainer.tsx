import { FC } from "react";

import ArticleCard from "../articles/ArticleCard";

import { getNewsArticles } from "@/utils/get-articles";

const NewsContainer: FC = async () => {
  const newsArticles = await getNewsArticles();

  return (
    <div className="container mx-auto gap-x-6 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {newsArticles.map((article, index) => (
        <ArticleCard
          key={index}
          article={article}
          bannerWidth={1200}
          bannerHeigth={675}
          type="news"
        />
      ))}
    </div>
  );
};

export default NewsContainer;
