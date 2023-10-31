import { FC } from "react";

import Link from "next/link";

import { FaPlus } from "react-icons/fa6";

const NewArticleButton: FC = () => {
  return (
    <Link
      href="/admin/new"
      className="mt-4 flex w-fit items-center gap-x-4 rounded-lg bg-amber-300 px-4 py-2 text-lg text-black hover:bg-amber-400 md:mt-0"
    >
      <FaPlus /> Nuevo Artículo
    </Link>
  );
};

export default NewArticleButton;
