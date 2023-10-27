"use client";
import { FC, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaTrash } from "react-icons/fa6";
import Modal from "../Modal";

type DeleteButtonProps = {
  slug: string;
  title: string;
};

const DeleteButton: FC<DeleteButtonProps> = ({ slug, title }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <motion.button
        className="w-1/2 py-2 rounded-r-lg text-slate-400 text-2xl transition-colors ease-in group hover:bg-red-700"
        onClick={() => (modalOpen ? close() : open())}
      >
        <FaTrash className="mx-auto transition-colors ease-in group-hover:text-white" />
      </motion.button>

      <AnimatePresence initial={false} mode="wait">
        {modalOpen && <Modal handleClose={close} slug={slug} title={title} />}
      </AnimatePresence>
    </>
  );
};

export default DeleteButton;
