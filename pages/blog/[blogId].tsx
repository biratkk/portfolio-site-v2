import { InferGetServerSidePropsType } from "next";
import { GetServerSidePropsContext } from "next";
import ReactMarkdown from "react-markdown";
import { Asset } from "contentful";
import remarkGfm from "remark-gfm";
import rehypekatex from "rehype-katex";
import remarkMath from "remark-math";
import Link from "../components/atoms/Link";
import { blog } from "../../components/contentful/blog";
import CodeDisplay from "../../components/CodeDisplay";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { blogId } = context.query;
  if (!blogId) {
    throw new Error("Please make sure you have a valid blog (id).");
  }
  const blogDetails = await blog.getEntry(blogId as string);
  return { props: { blogDetails } };
}

export default function BlogInstance({
  blogDetails: blog,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="container dark:text-white px-4 md:px-8 h-fit mx-auto py-32">
      <h1 className="text-5xl my-4 md:my-2 text-center font-bold">
        {blog.fields.title}
      </h1>
      <div className="flex items-center justify-center gap-2 my-4">
        <img
          src={(blog.fields.authorImage as Asset).fields.file?.url?.toString()}
          className="w-8 aspect-square rounded-full "
        />
        <p>{blog.fields.author}</p>
        <p className="opacity-80">
          -{" "}
          {new Date(blog.fields.dateAndTime as string).toLocaleDateString(
            "en-GB",
            {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
        </p>
      </div>
      <div className="markdown">
        <ReactMarkdown
          components={{
            a: (props) => {
              return <Link href={props.href || "#"}>{props.children}</Link>;
            },
            code: CodeDisplay
          }}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypekatex]}
        >
          {blog.fields.blogContent as string}
        </ReactMarkdown>
      </div>
    </div>
  );
}
