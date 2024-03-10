import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { ObjectEntriesResponse } from "../../components/contentful";
import { BlogSkeleton, blog } from "../../components/contentful/blog";
import { opensans } from "../../fonts";
import { formatDate } from "../../util/date";

export async function getServerSideProps() {
  const entries = await blog.getEntries({ content_type: "blogPost" });
  return { props: { entries } };
}
type BlogEntriesResponse = ObjectEntriesResponse<BlogSkeleton>;
export default function BlogListPage({
  entries,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div className="flex flex-col dark:text-white w-full gap-10">
        {entries?.items.map((item) => (
          <BlogPreview id={item.sys.id} {...item.fields} />
        ))}
      </div>
    </>
  );
}

function BlogPreview({
  title,
  dateAndTime,
  previewDescription,
  id,
}: BlogEntriesResponse["items"][number]["fields"] & { id: string }) {
  return (
    <Link className="group w-full" href={`/blog/${id}`}>
      <div className="">
        <span className="text-xs leading-none text-green-700 font-bold">
          {formatDate(new Date(dateAndTime as string))}
        </span>
        <h2 className=" text-2xl font-semibold group-hover:underline">
          {title}
        </h2>
      </div>
      <div className="">
        <p>{previewDescription}</p>
      </div>
    </Link>
  );
}
