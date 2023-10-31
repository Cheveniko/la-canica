import Link from "next/link";

import NewArticleForm from "@/components/forms/NewArticleForm";

import { FaArrowLeftLong } from "react-icons/fa6";

function NewArticlePage() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-start gap-x-4">
        <Link href="/admin" className="inline-block text-4xl">
          <FaArrowLeftLong />
        </Link>
        <h2 className="text-4xl">Nuevo Artículo</h2>
      </div>
      <hr className="border-1 mb-4 mt-6 border-gray-200" />
      <NewArticleForm />
    </div>
  );
}

export default NewArticlePage;
