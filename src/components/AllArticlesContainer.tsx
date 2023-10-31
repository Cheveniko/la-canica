import { FC } from "react";

import ArticleCard from "./ArticleCard";
import EditButton from "./buttons/EditButton";
import DeleteButton from "./buttons/DeleteButton";

import { getAllArticles } from "@/utils/get-articles";

const AllArticlesContainer: FC = async () => {
  const allArticles = await getAllArticles();

  return (
    <div className="container mx-auto grid gap-x-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {allArticles.map((article, index) => (
        <ArticleCard
          key={index}
          article={article}
          bannerWidth={1200}
          bannerHeigth={675}
          type="admin"
        >
          <div className="mt-4 flex justify-between rounded-lg border border-cyan-400 border-opacity-50">
            <EditButton slug={article.slug} />
            <DeleteButton slug={article.slug} title={article.title} />
          </div>
        </ArticleCard>
      ))}
    </div>
  );
};

export default AllArticlesContainer;
