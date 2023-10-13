import { getAllArticles } from "@/utils/get-articles";
import ArticleCard from "./ArticleCard";
import EditButton from "./buttons/EditButton";
import DeleteButton from "./buttons/DeleteButton";

async function AllArticlesContainer() {
  const allArticles = await getAllArticles();

  return (
    <div className="container mx-auto px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
      {allArticles.map((article) => (
        <ArticleCard
          key={article._id}
          article={article}
          bannerWidth={1200}
          bannerHeigth={675}
          type="admin"
        >
          <div className="flex justify-between mt-4 bg-gradient-to-r from-amber-400 to-red-600 rounded-full">
            <EditButton />
            <DeleteButton />
          </div>
        </ArticleCard>
      ))}
    </div>
  );
}

export default AllArticlesContainer;
