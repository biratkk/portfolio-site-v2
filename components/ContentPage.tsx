import { FaArrowLeft } from "react-icons/fa6";
import { cn } from "@nextui-org/react";
import Link from "next/link";
import { formatDate } from "../util/date";
import { AUTHOR } from "../util/constants";
import BlogContentMarkdown from "./BlogContentMarkdown";
import { courgette  } from "../util/fonts";

type ContentPageProps = {
    dateAndTime: string;
    title: string;
    blogContent: string
    prettify?: boolean;
}

const ContentPage = ({ dateAndTime, title, blogContent, prettify}: ContentPageProps) => {
    const formattedDate = formatDate(new Date(dateAndTime as string));
    return (
        <div className="container mx-auto w-full py-20">
            <InfoHeader author={AUTHOR} date={formattedDate} />
            <h1 className={cn("text-5xl my-8 font-bold", prettify ? "text-start underline" : 'text-center')}>
                {title}
            </h1>
            <div className={cn("my-4", prettify && courgette.className)}>
                <BlogContentMarkdown content={blogContent} />
            </div>
            <InfoHeader placement="below" author={AUTHOR} date={formattedDate} />
        </div>
    );
};

function InfoHeader({
    author,
    date,
    placement = 'above',
}: {
    author: string;
    date: string;
    placement?: "above" | "below";
}) {
    return (
        <div className={cn("flex justify-between items-center border-b border-1 border-black dark:border-white text-sm font-bold", placement === 'below' && "border-t border-b-0")}>
            <button
                className="flex items-center gap-1 text-sm font-bold hover:cursor-pointer"
                onClick={() => window.history.go(-1)}
            >
                <FaArrowLeft />
                Go back
            </button>
            <div className="flex items-center gap-2">
                <Link href="/">{author}</Link>
            </div>
            <div className="flex text-sm font-bold items-center justify-start gap-2 my-1">
                <p className="opacity-80">{date} </p>
            </div>
        </div>
    );
}

export default ContentPage;
