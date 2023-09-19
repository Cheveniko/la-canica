import { getSidebarArticles } from "@/utils/get-articles";
import ArticleCard from "./ArticleCard";

async function SideBar() {
  const sidebarArticles = await getSidebarArticles();
  return (
    <div className="lg:w-1/4 my-8 lg:my-0 h-min sticky top-[98px] p-4 border border-slate-950 shadow-sm shadow-slate-950 rounded-2xl">
      <h2 className="text-3xl lg:text-4xl font-bold text-center underline underline-offset-8 decoration-amber-400">
        Tendencias
      </h2>
      {sidebarArticles.map((article) => (
        <ArticleCard
          key={article._id}
          article={article}
          bannerWidth={1200}
          bannerHeigth={675}
          type="sidebar"
        />
      ))}
    </div>
  );
}

export default SideBar;
