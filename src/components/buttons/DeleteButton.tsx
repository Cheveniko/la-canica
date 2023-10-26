"use client";
import { FC } from "react";

import Link from "next/link";

import { FaTrash } from "react-icons/fa6";

type DeleteButtonProps = {
  slug: string;
};

const DeleteButton: FC<DeleteButtonProps> = ({ slug }) => {
  return (
    <Link
      href={`/admin/edit/${slug}`}
      className="w-1/2 py-2 rounded-r-lg text-slate-400 text-2xl transition-colors ease-in group hover:bg-red-700"
    >
      <FaTrash className="mx-auto transition-colors ease-in group-hover:text-white" />
    </Link>
  );
};

export default DeleteButton;
