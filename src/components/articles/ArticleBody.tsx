import { FC } from "react";

type ArticleBodyProps = {
  body: string;
  style: string;
};

const ArticleBody: FC<ArticleBodyProps> = ({ body, style }) => {
  return (
    <article className={style} dangerouslySetInnerHTML={{ __html: body }} />
  );
};

export default ArticleBody;
