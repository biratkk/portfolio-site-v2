import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

type PromptButtonType = {
  isLink?: boolean;
  href?: string;
  onClick?: () => void;
  children?: ReactNode;
};

const PromptButton = ({
  isLink,
  href,
  onClick,
  children,
}: PromptButtonType) => {
  const [followMouse, setFollowMouse] = useState<boolean>(false);

  const handleHoverStart = () => {
    setFollowMouse(true);
  };

  const handleHoverEnd = () => {
    setFollowMouse(false);
  };

  const className =
    "p-2 my-2 rounded-md bg-green-500 text-white hover:!scale-110";
  return (
        <motion.a
          key={"prompt-link"}
          onClick={onClick}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          whileHover={{ scale: 1.1, transition: { duration: 1 } }}
          className={className}
          href={isLink ? href : undefined}
        >
          {children}
        </motion.a>
  );
};

export default PromptButton;
