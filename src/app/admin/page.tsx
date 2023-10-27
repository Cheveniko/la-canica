import AllArticlesContainer from "@/components/AllArticlesContainer";
import NewArticleButton from "@/components/buttons/NewArticleButton";

export const dynamic = "force-dynamic";

function AdminPage() {
  return (
    <div>
      <div className="container mx-auto px-4 md:flex justify-between items-center">
        <h2 className="text-4xl">Todos los artículos</h2>
        <NewArticleButton />
      </div>
      <div className="container mx-auto px-4">
        <hr className="border-1 border-gray-200 mt-6" />
      </div>
      <AllArticlesContainer />
    </div>
  );
}

export default AdminPage;
