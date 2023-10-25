import NewArticleForm from "@/components/forms/NewArticleForm";

function NewArticlePage() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl">Nuevo Artículo</h2>
      <hr className="border-1 border-gray-200 mt-6 mb-4" />
      <NewArticleForm />
    </div>
  );
}

export default NewArticlePage;
