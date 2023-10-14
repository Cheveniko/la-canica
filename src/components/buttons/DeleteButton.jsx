"use client";
import { FaTrash } from "react-icons/fa6";

function DeleteButton() {
  return (
    // bg-red-600 rounded-e-xl
    <button
      onClick={() => alert("Borrar")}
      className="w-1/2 py-2 text-slate-400 text-2xl hover:"
    >
      <FaTrash className="mx-auto" />
    </button>
  );
}

export default DeleteButton;
