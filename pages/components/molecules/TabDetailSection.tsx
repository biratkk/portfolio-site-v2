import { Prompt } from "@next/font/google";
import Link from "../atoms/Link";
import { ExperienceType } from "../pages/ExperiencePage";


const promptNormal = Prompt({ weight: "400" });
const promptBold = Prompt({ weight: "500" });

type TabDetailSectionType = {
  details: ExperienceType;
};
const TabDetailSection = ({ details }: TabDetailSectionType) => {
  return (
    <div className="h-80">
      <div className="p-2 w-full flex flex-col ml-2 min-h-full">
        <h3 className="text-2xl">{details.role}</h3>
        <h4 className="text-xl">
          @ <Link href={details.linkToCompany}>{details.company}</Link> 
        </h4>
        <div className="text-sm">
          {details.fromDate} - {details.toDate}
        </div>
        <ul className="list-disc ml-4">
          {details.details.map((val) => (
            <li className="">{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabDetailSection;
