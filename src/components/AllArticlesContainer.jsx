import ArticleCard from "./ArticleCard";
import EditButton from "./buttons/EditButton";
import DeleteButton from "./buttons/DeleteButton";

import { getAllArticles } from "@/utils/get-articles";

async function AllArticlesContainer() {
  const allArticles = await getAllArticles();

  return (
    <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
      {allArticles.map((article) => (
        <ArticleCard
          key={article._id}
          article={article}
          bannerWidth={1200}
          bannerHeigth={675}
          type="admin"
        >
          <div className="flex justify-between mt-4 border border-cyan-400 border-opacity-50 rounded-lg">
            <EditButton />
            <DeleteButton />
          </div>
        </ArticleCard>
      ))}
    </div>
  );
}

export default AllArticlesContainer;
