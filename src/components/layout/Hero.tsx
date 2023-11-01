import ArticleCard from "../articles/ArticleCard";

import { getHeroArticle } from "@/utils/get-articles";

const Hero = async () => {
  const heroArticle = await getHeroArticle();

  if (!heroArticle) return <p>Artículo no encontrado</p>;
  return (
    <div className="lg:w-3/4 lg:pe-6">
      <ArticleCard
        article={heroArticle}
        bannerWidth={1200}
        bannerHeigth={300}
        type="hero"
      />
    </div>
  );
};

export default Hero;
