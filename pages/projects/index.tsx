import { InferGetServerSidePropsType } from "next";
import { projectPreview } from "../../components/contentful/projectPreview";
import ProjectGrid from "../../components/molecules/ProjectGrid";
import { formatDate } from "../../util/date";
import Pill from "../../components/Pill";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
export async function getServerSideProps() {
  const projectEntries = await projectPreview.getEntries({
    content_type: "projectPreview",
  });
  return { props: { projectEntries } };
}

export default function Projects({
  projectEntries,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="mb-4">
      <div className="flex flex-col gap-10">
        {projectEntries.items.map((entry) => (
          <Link className="group" href={entry.fields.url}>
            <p className="text-xs text-green-700 font-bold">
              {formatDate(new Date(entry.fields.date))}
            </p>
            <h2 className="flex items-center gap-2 font-semibold text-2xl mt-1 group-hover:underline">
              {entry.fields.title}
            </h2>
            <p>{entry.fields.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
