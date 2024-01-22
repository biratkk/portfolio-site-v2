import { EntryCollection } from "contentful";
import ProjectSquare, { ProjectDetailsType } from "../atoms/ProjectSquare";
import { ProjectPreviewSkeleton } from "../contentful/projectPreview";
import { ObjectEntriesResponse } from "../contentful";

type ProjectGridType = {
  projectDetails: ObjectEntriesResponse<ProjectPreviewSkeleton>;
};
const ProjectGrid = ({ projectDetails }: ProjectGridType) => {
  return (
    <div className="project-grid grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projectDetails && projectDetails.items.map((details, idx) => {
        return <ProjectSquare key={idx} {...details} />;
      })}
    </div>
  );
};

export default ProjectGrid;
