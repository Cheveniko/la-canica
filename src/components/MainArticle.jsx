import ArticleBanner from "./ArticleBanner";
import ArticleBody from "./ArticleBody";
import ArticleInfo from "./ArticleInfo";
import ArticleTitle from "./ArticleTitle";
import ShareCard from "./ShareCard";

import Article from "@/models/Article";

import { TitleStyles, InfoStyles, BodyStyles } from "@/styles/styles";

const loadMainArticle = async (slug) => {
  const mainArticle = await Article.findOne({ slug: slug });
  return mainArticle;
};

async function MainArticle({ slug, bannerWidth, bannerHeigth }) {
  const mainArticle = await loadMainArticle(slug);

  const { title, body, category, date, img_url } = mainArticle;
  const titleStyle = TitleStyles.main;
  const infoStyle = InfoStyles.main;
  const bodyStyle = BodyStyles.main;

  return (
    <div className="w-3/4 pe-6">
      <ArticleTitle title={title} style={titleStyle} />
      <ArticleInfo category={category} date={date} style={infoStyle} />
      <ArticleBanner
        img_url={img_url}
        title={title}
        width={bannerWidth}
        height={bannerHeigth}
      />
      <ArticleBody body={body} style={bodyStyle} />
      <ShareCard />
    </div>
  );
}

export default MainArticle;
