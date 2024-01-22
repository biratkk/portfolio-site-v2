import { useRouter } from "next/router";
import {
  Blog,
  BlogEntryResponse,
  getBlogEntry,
} from "../components/contentful";
import { NextPageContext } from "next";
import { GetServerSidePropsContext } from "next";
import ReactMarkdown from "react-markdown";
import { Asset } from "contentful";
import remarkGfm from "remark-gfm";
import rehypekatex from 'rehype-katex'
import remarkMath from 'remark-math'
import Link from "../components/atoms/Link";
import { AnimatePresence } from "framer-motion";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { blogId } = context.query;
  if (!blogId) {
    throw new Error("Please make sure you have a valid blog (id).");
  }
  const blog = await getBlogEntry(blogId as string);
  return { props: { blog } };
}

export default function BlogInstance ({ blog }: { blog: BlogEntryResponse }) {
  console.log(blog.fields.authorImage);
  return (
    <div className="container dark:text-white px-4 md:px-0 h-fit mx-auto py-32">
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
          {new Date(blog.fields.dateAndTime).toLocaleDateString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="markdown">
        <AnimatePresence>
          <ReactMarkdown
            components={{
              a: (props) => {
                return <Link href={props.href || "#"}>{props.children}</Link>;
              },
            }}
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypekatex]}
          >
            {blog.fields.blogContent}
          </ReactMarkdown>
        </AnimatePresence>
      </div>
    </div>
  );
}
