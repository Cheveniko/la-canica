import EditArticleForm from "@/components/forms/EditArticleForm";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

type Props = {
  params: Params;
};

function EditArticlePage({ params }: Props) {
  const slug: string = params.slug;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl">Editar Artículo</h2>
      <hr className="border-1 border-gray-200 mt-6 mb-4" />
      <EditArticleForm slug={slug} />
    </div>
  );
}

export default EditArticlePage;
