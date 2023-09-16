import Article from "@/models/Article";
import ArticleCard from "./ArticleCard";

const loadSidebarArticles = async () => {
  const sidebarArticles = await Article.find({ kind: "trending" });
  const slicedSidebarArticles = sidebarArticles.slice(-2).reverse();
  return slicedSidebarArticles;
};

async function SideBar() {
  const sidebarArticles = await loadSidebarArticles();
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
