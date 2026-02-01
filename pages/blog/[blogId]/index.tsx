import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { blog } from "../../../components/contentful/blog";
import { NextPageWithLayout } from "../../_app";
import ContentPage from "../../../components/ContentPage";

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
  return (
    <ContentPage dateAndTime={blog.fields.dateAndTime as string} title={blog.fields.title} blogContent={blog.fields.blogContent} />
  );
};



BlogInstance.getLayout = (page) => page;

export default BlogInstance;
