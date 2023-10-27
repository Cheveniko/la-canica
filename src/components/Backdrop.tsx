import { FC, ReactNode } from "react";

import { motion } from "framer-motion";

type BackdropProps = {
  children: ReactNode;
  onClick: () => void;
};

const Backdrop: FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black/80"
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
