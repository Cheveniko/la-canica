import ArticleBanner from "./ArticleBanner";
import ArticleBody from "./ArticleBody";
import ArticleInfo from "./ArticleInfo";
import ArticleTitle from "./ArticleTitle";
import ShareCard from "./ShareCard";

import { getMainArticle } from "@/utils/get-articles";

import { TitleStyles, InfoStyles, BodyStyles } from "@/styles/styles";

async function MainArticle({ slug, bannerWidth, bannerHeigth }) {
  const mainArticle = await getMainArticle(slug);

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
        priority={true}
      />
      <ArticleBody body={body} style={bodyStyle} />
      <ShareCard title={title} slug={slug} />
    </div>
  );
}

export default MainArticle;
