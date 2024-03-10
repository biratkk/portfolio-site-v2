import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { blog } from "../../../components/contentful/blog";
import BlogContentMarkdown from "../../../components/BlogContentMarkdown";
import { Asset } from "contentful";
import { formatDate } from "../../../util/date";
import { NextPageWithLayout } from "../../_app";
import { FaArrowLeft } from "react-icons/fa6";
import { cn } from "@nextui-org/react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { blogId } = context.query;
  if (!blogId) {
    throw new Error("Please make sure you have a valid blog (id).");
  }
  const blogDetails = await blog.getEntry(blogId as string);
  return { props: { blogDetails } };
}

const BlogInstance: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ blogDetails: blog }) => {
  const formattedDate = formatDate(new Date(blog.fields.dateAndTime as string));
  return (
    <div className="container mx-auto w-full py-20">
      <InfoHeader author={blog.fields.author} date={formattedDate} />
      <h1 className="text-5xl text-center my-8 font-bold">
        {blog.fields.title}
      </h1>
      <BlogContentMarkdown content={blog.fields.blogContent as string} />
      <InfoHeader placement="below" author={blog.fields.author} date={formattedDate} />
    </div>
  );
};

function InfoHeader({
  author,
  date,
  placement='above'
}: {
  author: string;
  date: string;
  placement?: "above" | "below";
}) {
  return (
    <div className={cn("flex justify-between items-center border-b border-1 border-black dark:border-white text-sm font-bold", placement === 'below' && "border-t border-b-0")}>
      <a
        href="/blog"
        className="flex items-center gap-1 text-sm font-bold hover:cursor-pointer"
      >
        <FaArrowLeft />
        All blogs
      </a>
      <div className="flex items-center gap-2">
        <a href="/">{author}</a>
      </div>
      <div className="flex text-sm font-bold items-center justify-start gap-2 my-1">
        <p className="opacity-80">{date} </p>
      </div>
    </div>
  );
}

BlogInstance.getLayout = (page) => page;

export default BlogInstance;
