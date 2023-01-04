import { useEffect, useState } from "react";
import { ProjectDetailsType } from "../atoms/ProjectSquare";
import ProjectGrid from "../molecules/ProjectGrid";
import { HoverHeader } from "./AboutPage";
import axios from "axios";

type ProjectsPageType = {};
const ProjectsPage = ({}: ProjectsPageType) => {
  const [projectDetails, setProjectDetails] = useState<ProjectDetailsType[]>([]);

  useEffect(() => {
    axios
      .get("/api/project-details")
      .then((res) => res.data)
      .then((data) => setProjectDetails(data));
  }, []);

  return (
    <div
      id="projects"
      className="flex w-screen h-screen justify-center items-center"
    >
      <div className="flex w-5/6 flex-col items-center text-black dark:text-slate-300">
        <div className="w-full text-center mb-2 h-1/6">
          <HoverHeader>02. Projects</HoverHeader>
        </div>
        <div>
          <ProjectGrid projectDetails={projectDetails}></ProjectGrid>
        </div>
        <div className="mt-4">
          <a
            rel="noopener noreferrer"
            className="underline text-green-600 hover:text-green-500 rounded-md p-2"
            href="https://github.com/biratkk"
            target={"_blank"}
          >
            See more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
