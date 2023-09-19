import { resolve } from "styled-jsx/css";
import ArticleCard from "./ArticleCard";

import { getHeroArticle } from "@/utils/get-articles";

async function Hero() {
  const heroArticle = await getHeroArticle();
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
}

export default Hero;
