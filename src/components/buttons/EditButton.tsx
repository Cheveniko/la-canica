"use client";
import { FC } from "react";

import Link from "next/link";

import { TbEdit } from "react-icons/tb";

type EditButtonProps = {
  slug: string;
};

const EditButton: FC<EditButtonProps> = ({ slug }) => {
  return (
    <Link
      href={`/admin/edit/${slug}`}
      className="w-1/2 py-2 border-r border-cyan-400 border-opacity-50 text-slate-400 text-2xl hover:"
    >
      <TbEdit className="mx-auto" />
    </Link>
  );
};

export default EditButton;
