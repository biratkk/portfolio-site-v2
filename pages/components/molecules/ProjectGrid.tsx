import { EntryCollection } from "contentful";
import ProjectSquare, { ProjectDetailsType } from "../atoms/ProjectSquare";
import { ProjectPreviewSkeleton } from "../../../components/contentful/projectPreview";
import { ObjectEntriesResponse } from "../../../components/contentful";

type ProjectGridType = {
  projectDetails: ObjectEntriesResponse<ProjectPreviewSkeleton>;
};
const ProjectGrid = ({ projectDetails }: ProjectGridType) => {
  return (
    <div className="project-grid grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projectDetails && projectDetails.items.map((item, idx) => {
        return <ProjectSquare key={idx} {...item.fields}/>;
      })}
    </div>
  );
};

export default ProjectGrid;
