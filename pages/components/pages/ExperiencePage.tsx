import TabbedSection from "../molecules/TabbedSection";
import TabDetailSection from "../molecules/TabDetailSection";
import { HoverHeader } from "./AboutPage";

const experienceDetails: ExperienceType[] = [
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    fromDate: "3/7/2022",
    toDate: "Present",
    details: [
      ``,
      ``,
      ``,
    ],
    linkToCompany: "https://www.amazon.com",
  },
  {
    company: "Fundapps",
    role: "Software Engineering Intern",
    fromDate: "7/6/2022",
    toDate: "7/9/2022",
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
      className="w-screen h-screen flex justify-center items-center dark:text-slate-300"
    >
      <div className="w-5/6 h-2/3 flex flex-col">
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
