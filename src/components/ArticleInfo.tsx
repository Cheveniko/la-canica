import { FC } from "react";

// import { FaRegComment } from "react-icons/fa6";

type ArticleInfoProps = {
  category: string;
  date: Date;
  style: string;
};

const ArticleInfo: FC<ArticleInfoProps> = ({ category, date, style }) => {
  return (
    <div className={style}>
      <h3 className="text-amber-400">{category.toUpperCase()}</h3>
      <p className="text-gray-400">
        {new Intl.DateTimeFormat("en", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format(date)}
      </p>
      {/* <span className="text-gray-400 flex items-center gap-1">
        <FaRegComment />
        <p>50</p>
      </span> */}
    </div>
  );
};

export default ArticleInfo;
