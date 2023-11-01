import { FC, ReactNode } from "react";

import { motion } from "framer-motion";

type BackdropProps = {
  children: ReactNode;
  onClick: () => void;
};

const Backdrop: FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <motion.div
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black/80"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
