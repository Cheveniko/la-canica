import { FC } from "react";

import { motion } from "framer-motion";

import Backdrop from "./Backdrop";

type ModalProps = {
  handleClose: () => {};
  text: string;
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

const Modal: FC<ModalProps> = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal m-auto py-0 px-8 rounded-xl flex flex-col items-center"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.div>
    </Backdrop>
  );
};

export default Modal;
