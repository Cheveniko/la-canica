import { FC } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import Backdrop from "./Backdrop";

import { FaTrash } from "react-icons/fa6";

type ModalProps = {
  handleClose: () => void;
  slug: string;
  title: string;
};

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal: FC<ModalProps> = ({ handleClose, slug, title }) => {
  const router = useRouter();

  const deleteArticle = async () => {
    await fetch(`https://www.lacanica.ec/api/articles/${slug}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => console.log(data));

    handleClose();
    router.refresh();
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal m-auto flex flex-col items-center justify-evenly rounded-xl bg-red-600/80 px-8 py-2 md:py-0"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h4 className="text-center text-lg">
          Estás seguro de borrar el artículo: <br />
          <Link
            href={`/article/${slug}`}
            className="text-amber-400 hover:underline"
          >
            {title}
          </Link>
        </h4>
        <button
          type="button"
          className="mx-auto block rounded-md border border-white px-4 py-1 text-lg hover:bg-red-800"
          onClick={deleteArticle}
        >
          Borrar
          <FaTrash className="ms-2 inline-block" />
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
