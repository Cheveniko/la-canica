import ArticleBanner from "./ArticleBanner";
import ArticleInfo from "./ArticleInfo";
import ArticleTitle from "./ArticleTitle";
import ArticleBody from "./ArticleBody";
import LinkArticle from "./LinkArticle";

import {
  TitleStyles,
  InfoStyles,
  BodyStyles,
  ArticleContainerStyles,
} from "@/styles/styles";

function ArticleCard({ article, bannerWidth, bannerHeigth, type, children }) {
  const { title, body, category, date, img_url, slug } = article;

  let titleStyle = null;
  let infoStyle = null;
  let bodyStyle = null;
  let articleContainerStyle = null;
  let showArticleBody = false;
  let isImagePriority = false;

  switch (type) {
    case "hero":
      articleContainerStyle = ArticleContainerStyles.hero;
      titleStyle = TitleStyles.hero;
      infoStyle = InfoStyles.hero;
      bodyStyle = BodyStyles.hero;
      showArticleBody = true;
      isImagePriority = true;
      break;

    case "sidebar":
      articleContainerStyle = ArticleContainerStyles.sidebar;
      titleStyle = TitleStyles.sidebar;
      infoStyle = InfoStyles.sidebar;
      bodyStyle = BodyStyles.sidebar;
      break;

    case "news":
      articleContainerStyle = ArticleContainerStyles.news;
      titleStyle = TitleStyles.news;
      infoStyle = InfoStyles.news;
      bodyStyle = BodyStyles.news;
      showArticleBody = true;
      break;

    case "main":
      articleContainerStyle = ArticleContainerStyles.main;
      titleStyle = TitleStyles.main;
      infoStyle = InfoStyles.main;
      bodyStyle = BodyStyles.main;
      showArticleBody = true;
      break;

    case "admin":
      articleContainerStyle = ArticleContainerStyles.admin;
      titleStyle = TitleStyles.admin;
      infoStyle = InfoStyles.admin;
      bodyStyle = BodyStyles.admin;
      showArticleBody = false;
      break;

    default:
      articleContainerStyle = ArticleContainerStyles.news;
      titleStyle = TitleStyles.news;
      infoStyle = InfoStyles.news;
      bodyStyle = BodyStyles.news;
      showArticleBody = true;
  }

  return (
    <div className={articleContainerStyle}>
      <LinkArticle slug={slug}>
        <ArticleBanner
          img_url={img_url}
          title={title}
          width={bannerWidth}
          height={bannerHeigth}
          priority={isImagePriority}
        />
        <ArticleInfo category={category} date={date} style={infoStyle} />
        <ArticleTitle title={title} style={titleStyle} />
        {showArticleBody && <ArticleBody body={body} style={bodyStyle} />}
      </LinkArticle>
      {children}
    </div>
  );
}

export default ArticleCard;
