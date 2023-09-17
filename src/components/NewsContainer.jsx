import ArticleCard from "./ArticleCard";

import { getNewsArticles } from "@/utils/get-articles";

// const loadNewsArticles = async () => {
//   const newsArticles = await Article.find({ kind: "news" });
//   const slicednewsArticles = newsArticles.reverse();
//   return slicednewsArticles;
// };

async function NewsContainer() {
  const newsArticles = await getNewsArticles();

  return (
    <div className="container mx-auto grid grid-cols-4 gap-x-6">
      {newsArticles.map((article) => (
        <ArticleCard
          key={article._id}
          article={article}
          bannerWidth={400}
          bannerHeigth={250}
          type="news"
        />
      ))}
    </div>
  );
}

export default NewsContainer;
