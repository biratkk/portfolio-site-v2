import { ObjectEntriesResponse } from "../../components/contentful";
import { ProjectPreviewSkeleton } from "../../components/contentful/projectPreview";
import ProjectSquare from "../atoms/ProjectSquare";

type ProjectGridType = {
  projectDetails: ObjectEntriesResponse<ProjectPreviewSkeleton>;
};
const ProjectGrid = ({ projectDetails }: ProjectGridType) => {
  return (
    <div className="project-grid grid gap-1 grid-cols-1 md:grid-cols-2">
      {projectDetails &&
        projectDetails.items.map((item, idx) => {
          return <ProjectSquare key={idx} {...item.fields} />;
        })}
    </div>
  );
};

export default ProjectGrid;
