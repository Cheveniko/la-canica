import Article from "@/models/Article";
import ArticleCard from "./ArticleCard";

const loadHeroArticle = async () => {
  const heroArticle = await Article.findOne({ kind: "main" });
  return heroArticle;
};

async function Hero() {
  const heroArticle = await loadHeroArticle();
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
