import { Prompt } from "@next/font/google";
import { useState } from "react";
import styled from "@emotion/styled";
import { ExperienceType } from "../pages/ExperiencePage";
import TabDetailSection from "./TabDetailSection";

const promptNormal = Prompt({ weight: "300", subsets: ["latin"] });

type TabbedSectionType = {
  experiences: ExperienceType[];
};
const TabbedSection = ({ experiences }: TabbedSectionType) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row justify-center">
      <div className="p-0 md:p-4 w-48 h-12 flex flex-row md:w-36 md:justify-start md:flex-col">
        {experiences &&
          experiences.map((_, ind) => {
            return (
              <Tab
                key={ind}
                style={promptNormal.style}
                className={`w-full font-light ${
                  ind === currentIndex ? "text-green-500 font-normal" : ""
                }`}
                onClick={() => setCurrentIndex(ind)}
                highlighted={ind === currentIndex}
              >
                {_.company}
              </Tab>
            );
          })}
      </div>
      <div className="w-full md:w-1/2">
        <TabDetailSection details={experiences && experiences[currentIndex]} />
      </div>
    </div>
  );
};

const Tab = styled.button<{ highlighted: boolean }>`
  cursor: pointer;
  padding: 0.5em;
  border-left: rgb(34 197 94)
    ${({ highlighted }) => (highlighted ? "2" : "1")}px solid;

  @media screen and (max-width: 768px) {
    border: none;
    border-top: rgb(34 197 94)
      ${({ highlighted }) => (highlighted ? "2" : "1")}px solid;
  }
`;

export default TabbedSection;
