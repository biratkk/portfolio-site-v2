import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

export type ProjectDetailsType = {
  date: string;
  title: string;
  description: string;
  link: string;
};

type ProjectSquareType = ProjectDetailsType;

const ProjectSquare = ({
  date,
  title,
  description,
  link,
}: ProjectSquareType) => {
  const [hovering, setHovering] = useState<boolean>(false);
  return (
    <div className="snap-start">
      <AnimatePresence>
        <a
          href={link}
          target={"_blank"}
          className="text-black dark:text-slate-300"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ padding: "0" }}
            whileHover={{ padding: "6px" }}
            className="flex flex-col w-full h-full bg-white dark:bg-slate-700"
          >
            <ProjectSquareInner className=" border-2 w-full h-full p-4 shadow-lg">
              <h3 className="text-2xl text-green-500">{title}</h3>
              <span className="text-sm text-slate-400 italic">{date}</span>
              <div className="text-lg">{description}</div>
            </ProjectSquareInner>
          </motion.div>
        </a>
      </AnimatePresence>
    </div>
  );
};

const ProjectSquareInner = styled(motion.div)`
  :hover {
    background-color: rgba(32, 197, 95, 0.144);
    /* background: linear-gradient(transparent, rgb(34 197 94));
    background: linear-gradient(135deg, rgba(255,255,255,0) 60%, rgba(9,121,9,0.5973739837731968) 100%); */
  }
`;

export default ProjectSquare;
