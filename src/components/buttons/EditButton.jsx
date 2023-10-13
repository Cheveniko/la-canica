import { TbEdit } from "react-icons/tb";

function EditButton() {
  return (
    // bg-amber-400 rounded-s-xl
    <button className="w-1/2 py-2 border-r border-black text-black text-2xl hover:">
      <TbEdit className="mx-auto" />
    </button>
  );
}

export default EditButton;
