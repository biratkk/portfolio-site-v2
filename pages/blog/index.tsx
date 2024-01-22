import { opensans } from "../../fonts";
import Link from "next/link";
import { Blog, BlogSkeleton, blog } from "../components/contentful/blog";
import { ObjectEntriesResponse } from "../components/contentful";
import { EntrySkeletonType } from "contentful";
import { InferGetServerSidePropsType } from "next";

export async function getServerSideProps() {
  const entries = await blog.getEntries({content_type: 'blogPost'});
  return { props: { entries } };
}
type BlogEntriesResponse = ObjectEntriesResponse<BlogSkeleton>;
export default function BlogListPage({
  entries,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div className="pt-4">
        <div className="container mx-auto px-4">
          <div className="py-20">
            <h1
              style={opensans.style}
              className="py-2 text-5xl font-open-sans my-4 text-green-500 dark:text-white rounded-r-md italic"
            >
              My Blogs
            </h1>
            <div className="grid grid-cols-1 gap-4">
              {entries?.items.map((item) => (
                <BlogPreview id={item.sys.id} {...item.fields} />
              ))}
            </div>
          </div>
        </div>
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
    <Link href={`/blog/${id}`}>
      <div className="overflow-hidden h-44 bg-white dark:text-white dark:bg-slate-700 duration-300 dark:shadow-none dark:outline dark:outline-1 dark:hover:outline-green-200 dark:hover:shadow hover:cursor-pointer dark:outline-white shadow-md hover:shadow-lg dark:shadow-white rounded-lg">
        <div className="p-4 dark:bg-green-500 dark:bg-opacity-75 bg-green-100">
          <h2 className=" text-xl font-semibold dark:text-white text-slate-700">
            {title}
          </h2>
        </div>
        <span className="px-4 text-xs opacity-50">
          {new Date(dateAndTime as string).toUTCString()}
        </span>
        <div className="px-4 py-1">
          <p>{previewDescription}</p>
        </div>
      </div>
    </Link>
  );
}
