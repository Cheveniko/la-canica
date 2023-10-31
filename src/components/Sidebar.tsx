import ArticleCard from "./ArticleCard";

import { getSidebarArticles } from "@/utils/get-articles";
import { FC } from "react";

const SideBar: FC = async () => {
  const sidebarArticles = await getSidebarArticles();
  return (
    <div className="sticky top-[98px] my-8 h-min rounded-2xl border border-slate-950 p-4 shadow-sm shadow-slate-950 lg:my-0 lg:w-1/4">
      <h2 className="text-center text-3xl font-bold underline decoration-amber-400 underline-offset-8 lg:text-4xl">
        Tendencias
      </h2>
      {sidebarArticles.map((article, index) => (
        <ArticleCard
          key={index}
          article={article}
          bannerWidth={1200}
          bannerHeigth={675}
          type="sidebar"
        />
      ))}
    </div>
  );
};

export default SideBar;
