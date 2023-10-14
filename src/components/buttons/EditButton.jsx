"use client";
import { TbEdit } from "react-icons/tb";

function EditButton() {
  return (
    <button
      onClick={() => alert("Editar")}
      className="w-1/2 py-2 border-r border-cyan-400 border-opacity-50 text-slate-400 text-2xl hover:"
    >
      <TbEdit className="mx-auto" />
    </button>
  );
}

export default EditButton;
