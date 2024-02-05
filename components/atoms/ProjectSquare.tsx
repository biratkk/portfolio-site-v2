import { motion } from "framer-motion";
import styled from "@emotion/styled";
import Pill from "../../components/Pill";

export type ProjectDetailsType = {
  url: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
};

const ProjectSquare = ({
  url,
  title,
  date,
  description,
  tags,
}: ProjectDetailsType) => {
  return (
    <div className="snap-start w-80 aspect-square">
      <a
        href={url}
        target={"_blank"}
        className="text-black dark:text-slate-300"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col hover:p-2 duration-200 w-full h-full bg-white dark:bg-slate-700">
          <ProjectSquareInner className="flex flex-col justify-between border border-1 dark:bg-slate-600 backdrop-blur-sm dark:border-slate-500 rounded-sm w-full h-full p-4 shadow-lg">
            <div>
              <h3 className="text-2xl font-semibold text-green-500">{title}</h3>
              <span className="text-sm text-slate-400 italic">
                {new Date(date).toDateString()}
              </span>
              <div className="">{description}</div>
            </div>
            <div className="w-full flex gap-2 flex-wrap">
              {tags && tags.map((tag, idx) => <Pill key={idx}>{tag}</Pill>)}
            </div>
          </ProjectSquareInner>
        </div>
      </a>
    </div>
  );
};

const ProjectSquareInner = styled(motion.div)`
  :hover {
    background-color: rgba(32, 197, 95, 0.144);
  }
`;

export default ProjectSquare;
