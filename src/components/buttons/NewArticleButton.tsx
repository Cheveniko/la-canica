import { FC } from "react";

import Link from "next/link";

import { FaPlus } from "react-icons/fa6";

const NewArticleButton: FC = () => {
  return (
    <Link
      href="/admin/new"
      className="flex items-center gap-x-4 px-4 py-2 bg-amber-300 text-black text-lg rounded-lg hover:bg-amber-400"
    >
      <FaPlus /> Nuevo Artículo
    </Link>
  );
};

export default NewArticleButton;
