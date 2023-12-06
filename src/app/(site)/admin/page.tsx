import AllArticlesContainer from "@/components/articles/AllArticlesContainer";
import NewArticleButton from "@/components/buttons/NewArticleButton";
export const dynamic = "force-dynamic";

async function AdminPage() {
  return (
    <div>
      <div className="container mx-auto items-center justify-between px-4 md:flex">
        <h2 className="text-4xl">Todos los artículos</h2>
        <NewArticleButton />
      </div>
      <div className="container mx-auto px-4">
        <hr className="border-1 mt-6 border-gray-200" />
      </div>
      <AllArticlesContainer />
    </div>
  );
}

export default AdminPage;
