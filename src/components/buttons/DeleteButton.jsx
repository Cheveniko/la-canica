import { FaTrash } from "react-icons/fa6";

function DeleteButton() {
  return (
    // bg-red-600 rounded-e-xl
    <button className="w-1/2 py-2 text-black text-2xl hover:">
      <FaTrash className="mx-auto" />
    </button>
  );
}

export default DeleteButton;
