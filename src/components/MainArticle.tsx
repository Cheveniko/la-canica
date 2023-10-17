import { FC } from "react";

import { notFound } from "next/navigation";

import ArticleBanner from "./ArticleBanner";
import ArticleBody from "./ArticleBody";
import ArticleInfo from "./ArticleInfo";
import ArticleTitle from "./ArticleTitle";
import ShareCard from "./ShareCard";

import { getMainArticle } from "@/utils/get-articles";

import { TitleStyles, InfoStyles, BodyStyles } from "@/styles/styles";

type MainArticleProps = {
  slug: string;
  bannerWidth: number;
  bannerHeight: number;
};

const MainArticle: FC<MainArticleProps> = async ({
  slug,
  bannerWidth,
  bannerHeight,
}) => {
  const titleStyle = TitleStyles.main;
  const infoStyle = InfoStyles.main;
  const bodyStyle = BodyStyles.main;

  const mainArticle = await getMainArticle(slug);

  if (mainArticle) {
    const { title, body, category, date, img_url } = mainArticle;
    return (
      <div className="lg:w-3/4 lg:pe-6">
        <ArticleTitle title={title} style={titleStyle} />
        <ArticleInfo category={category} date={date} style={infoStyle} />
        <ArticleBanner
          img_url={img_url}
          title={title}
          width={bannerWidth}
          height={bannerHeight}
          priority={true}
        />
        <ArticleBody body={body} style={bodyStyle} />
        <ShareCard title={title} slug={slug} />
      </div>
    );
  } else {
    notFound();
  }
};

export default MainArticle;
