import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Entry } from "contentful";
import { BlogSkeleton } from "../../../components/contentful/blog";
import { ProjectPreviewSkeleton } from "../../../components/contentful/projectPreview";
import { ObjectEntryResponse } from "../../../components/contentful";

export type ProjectDetailsType = {
  url: string;
  title: string;
  date: string;
  description: string;
};

const ProjectSquare = ({url, title, date, description}: ProjectDetailsType) => {
  return (
    <div className="snap-start w-80 aspect-square">
      <a
        href={url}
        target={"_blank"}
        className="text-black dark:text-slate-300"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col hover:p-2 duration-200 w-full h-full bg-white dark:bg-slate-700">
          <ProjectSquareInner className=" border-2 w-full h-full p-4 shadow-lg">
            <h3 className="text-2xl text-green-500">{title}</h3>
            <span className="text-sm text-slate-400 italic">
              {new Date(date).toDateString()}
            </span>
            <div className="text-lg">{description}</div>
          </ProjectSquareInner>
        </div>
      </a>
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
