import ArticleCard from "./ArticleCard";

import { getHeroArticle } from "@/utils/get-articles";

// const loadHeroArticle = async () => {
//   const heroArticle = await Article.findOne({ kind: "main" });
//   return heroArticle;
// };

async function Hero() {
  const heroArticle = await getHeroArticle();
  return (
    <div className="w-3/4 pe-6">
      <ArticleCard
        article={heroArticle}
        bannerWidth={1200}
        bannerHeigth={300}
        type="hero"
      />
    </div>
  );
}

export default Hero;
