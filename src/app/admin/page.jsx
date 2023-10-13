import AllArticlesContainer from "@/components/AllArticlesContainer";
import NewArticleButton from "@/components/buttons/NewArticleButton";

function AdminPage() {
  return (
    <main className="bg-cyan-950 py-4">
      <div className="container mx-auto px-4 lg:flex justify-between items-center">
        <h2 className="text-4xl">Todos los artículos</h2>
        <NewArticleButton />
      </div>
      <AllArticlesContainer />
    </main>
  );
}

export default AdminPage;
