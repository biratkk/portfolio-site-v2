import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { poem } from "../../../../components/contentful/poems";
import { NextPageWithLayout } from "../../../_app";
import ContentPage from "../../../../components/ContentPage";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { poemId } = context.query;
    if (!poemId) {
        throw new Error("Please make sure you have a valid poem (id).");
    }
    const poemDetails = await poem.getEntry(poemId as string);
    return { props: { poemDetails } };
}

const BlogInstance: NextPageWithLayout<
    InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ poemDetails }) => {
    return (
        <ContentPage dateAndTime={poemDetails.sys.updatedAt as string} title={poemDetails.fields.title} blogContent={poemDetails.fields.content} prettify />
    );
};



BlogInstance.getLayout = (page) => page;

export default BlogInstance;
