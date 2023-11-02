import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import EditArticleForm from "@/components/forms/EditArticleForm";

import { FaArrowLeftLong, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

type Props = {
  params: Params;
};

function EditArticlePage({ params }: Props) {
  const slug: string = params.slug;

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-baseline justify-between">
        <div className="flex items-center justify-start gap-x-4 ">
          <Link href="/admin" className="inline-block text-4xl">
            <FaArrowLeftLong />
          </Link>
          <h2 className="text-4xl">Editar Artículo</h2>
        </div>
        <div className="flex items-baseline text-amber-400">
          <Link
            href={`/article/${slug}`}
            target="_blank"
            className="hover:underline"
          >
            Ver Artículo <FaArrowUpRightFromSquare className="inline-block" />
          </Link>
        </div>
      </div>
      <hr className="border-1 mb-4 mt-6 border-gray-200" />
      <EditArticleForm slug={slug} />
    </div>
  );
}

export default EditArticlePage;
