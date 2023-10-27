import Link from "next/link";

import NewArticleForm from "@/components/forms/NewArticleForm";

import { FaArrowLeftLong } from "react-icons/fa6";

function NewArticlePage() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-start items-center gap-x-4">
        <Link href="/admin" className="text-4xl inline-block">
          <FaArrowLeftLong />
        </Link>
        <h2 className="text-4xl">Nuevo Artículo</h2>
      </div>
      <hr className="border-1 border-gray-200 mt-6 mb-4" />
      <NewArticleForm />
    </div>
  );
}

export default NewArticlePage;
