import { FaPlus } from "react-icons/fa6";

function NewArticleButton() {
  return (
    <button className="flex items-center gap-x-4 px-4 py-2 bg-amber-300 text-black text-lg rounded-lg hover:bg-amber-400">
      <FaPlus /> Nuevo Artículo
    </button>
  );
}

export default NewArticleButton;
