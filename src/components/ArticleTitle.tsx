import { FC } from "react";

type ArticleTitleProps = {
  title: string;
  style: string;
};

const ArticleTitle: FC<ArticleTitleProps> = ({ title, style }) => {
  return <h2 className={style}>{title}</h2>;
};

export default ArticleTitle;
