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
      <div className="flex justify-between items-baseline">
        <div className="flex justify-start items-center gap-x-4 ">
          <Link href="/admin" className="text-4xl inline-block">
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
      <hr className="border-1 border-gray-200 mt-6 mb-4" />
      <EditArticleForm slug={slug} />
    </div>
  );
}

export default EditArticlePage;
