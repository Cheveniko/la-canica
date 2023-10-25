"use client";
import Link from "next/link";
import { FC } from "react";

import { FaTrash } from "react-icons/fa6";

type DeleteButtonProps = {
  slug: string;
};

const DeleteButton: FC<DeleteButtonProps> = ({ slug }) => {
  return (
    <Link
      href={`/admin/edit/${slug}`}
      className="w-1/2 py-2 text-slate-400 text-2xl hover:"
    >
      <FaTrash className="mx-auto" />
    </Link>
  );
};

export default DeleteButton;
