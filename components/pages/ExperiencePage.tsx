import TabbedSection from "../molecules/TabbedSection";
import { HoverHeader } from "./AboutPage";

const experienceDetails: ExperienceType[] = [
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    fromDate: "July 2023",
    toDate:"Sept 2023",
    details: [
      `Designed and built a proof of concept prototype UI design tool in
React that improved developer workflow by 70% for a large-scale
internal code generation engine. Integrated full-stack technologies to
enable enhanced functionality.`,
      `Bootstrapped and hosted scalable infrastructure on AWS services
like Route 53, Lambda, API Gateway and S3 using aws-cdk.
Established foundations for wider team adoption and growth.`,
      `Implemented CI/CD pipeline to enable streamlined development
through automated build, test and deployment processes.`,
      `Led initial proof of concept phases and ensured smooth transition to
internal team for full production development based on successful
prototype.`,
    ],
    linkToCompany: "https://www.amazon.com",
  },
  {
    company: "Fundapps",
    role: "Software Engineering Intern",
    fromDate: "June 2022",
    toDate: "September 2022",
    details: [
      `Migrated a dynamic graph and chat box from monolithic .NET
    component to standalone React service, allowing the user to
    dynamically interact with and make changes to current and past asset
    disclosure information in real-time.`,
      `Improved the rendering time of graph data loading and rendering by
    150%`,
      `Implemented client side testing, automated integration and visual
    regression testing to ensure security and robustness using TDD
    practices.`,
    ],
    linkToCompany: "https://www.fundapps.co/",
  },
];

export type ExperienceType = {
  company: string;
  role: string;
  fromDate: string;
  toDate: string;
  details: string[];
  linkToCompany: string;
};

type ExperiencePageType = {};
const ExperiencePage = ({}: ExperiencePageType) => {
  return (
    <div
      id="experience"
      className="w-screen h-screen mb-20 flex justify-center items-center dark:text-slate-300"
    >
      <div className="w-5/6 flex flex-col">
        <div className="text-center w-full">
          <HoverHeader>03. Experience</HoverHeader>
        </div>
        <div>
          <TabbedSection experiences={experienceDetails} />
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
