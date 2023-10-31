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
      className="group w-1/2 rounded-l-lg border-r border-cyan-400 border-opacity-50 py-2 text-2xl text-slate-400 transition-colors ease-in hover:bg-amber-400"
    >
      <TbEdit className="mx-auto transition-colors ease-in group-hover:text-black" />
    </Link>
  );
};

export default EditButton;
