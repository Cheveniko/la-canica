import { getSidebarArticles } from "@/utils/get-articles";
import ArticleCard from "./ArticleCard";

async function SideBar() {
  const sidebarArticles = await getSidebarArticles();
  return (
    <div className="w-1/4 p-4 border border-slate-950 shadow-sm shadow-slate-950 rounded-2xl">
      <h2 className="text-4xl font-bold text-center underline underline-offset-8 decoration-amber-400">
        Tendencias
      </h2>
      {sidebarArticles.map((article) => (
        <ArticleCard
          key={article._id}
          article={article}
          bannerWidth={500}
          bannerHeigth={200}
          type="sidebar"
        />
      ))}
    </div>
  );
}

export default SideBar;
