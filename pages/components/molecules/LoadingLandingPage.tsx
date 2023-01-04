import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import LoadingCube from "../atoms/LoadingCube";

const LoadingLandingPageCover = ({
  children,
  duration,
}: {
  children: ReactNode;
  duration: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, duration * 1000);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="1231njdsa"
          className="absolute w-full h-full bg-white dark:bg-slate-800 flex items-center justify-center z-10"
          initial={{ y: "0" }}
          animate={{ y: "0" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: "backOut" }}
          // exit={{display: 'none'}}
        >
          <LoadingCube />
        </motion.div>
      ) : (
        children
      )}
    </AnimatePresence>
  );
};

export default LoadingLandingPageCover;
