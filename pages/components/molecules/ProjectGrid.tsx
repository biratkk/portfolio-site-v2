import styled from "styled-components";
import ProjectSquare, { ProjectDetailsType } from "../atoms/ProjectSquare";

type ProjectGridType = {
  projectDetails: ProjectDetailsType[];
};
const ProjectGrid = ({ projectDetails }: ProjectGridType) => {
  return (
    <Grid className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projectDetails && projectDetails.map((details) => {
        return <ProjectSquare {...details} />;
      })}
    </Grid>
  );
};

const Grid = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  display: grid;
  justify-content: space-between;
  width: 100%;
  grid-template-columns: 320px;
  grid-template-columns: repeat(3, 320px);
  height: 320px;
  width: calc(320px * 1);
  scroll-snap-type: x mandatory;
  column-gap: 10px;
  @media screen and (min-width: 768px) {
    /* grid-template-columns: 320px 320px; */
    width: calc((320px * 2) + 10px);
  }

  @media screen and (min-width: 1200px) {
    /* overflow-x: hidden; */
    width: calc(320px * 3 + 20px);
  }
`;

export default ProjectGrid;
