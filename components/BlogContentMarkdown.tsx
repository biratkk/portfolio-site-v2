import ReactMarkdown from "react-markdown";
import Link from "../components/atoms/Link";
import CodeDisplay from "./CodeDisplay";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import Pill from "./Pill";

type BlogContentMarkdownType = {
  content: string;
};
const BlogContentMarkdown = ({ content }: BlogContentMarkdownType) => {
  return (
    <ReactMarkdown
      components={{
        h1: (props) => (
          <h2 className="flex items-center gap-2 text-3xl mt-4 font-bold">{props.children}</h2>
        ),
        h2: (props) => (
          <h3 className="text-2xl mt-4 font-bold">{props.children}</h3>
        ),
        h3: (props) => (
          <h4 className="text-xl mt-4 font-bold">{props.children}</h4>
        ),
        ul: (props) => <ul className="flex gap-1">{props.children}</ul>,
        ol: (props) => <ol className="my-2 list-decimal px-8">{props.children}</ol>,
        li: (props) => <li className="my-2 text-xl">{props.children}</li>,
        p: (props) => <p className="text-xl leading-relaxed mt-4">{props.children}</p>,
        a: (props) => {
          if(props.href === "pill"){
              return <Pill gray>{props.children}</Pill>
          }
          return (
            <Link newTab href={props.href || "#"}>
              {props.children}
            </Link>
          );
        },
        img: (props) => (
          <span className="flex justify-center my-4">
            <img
              className=" max-w-full md:max-w-5xl outline outline-1 dark:outline-slate-500 outline-slate-700 shadow-lg rounded-sm"
              src={props.src}
            />
          </span>
        ),
        blockquote: (props) => (
            <blockquote className="my-4 text-base p-3 pl-6 pb-6 outline outline-1 outline-slate-300 rounded-r-md border-l-8 border-green-700 dark:border-slate-400 dark:outline-slate-500 dark:bg-gray-900 dark:text-white bg-green-100">
                {props.children}
            </blockquote>
        ),
        code: CodeDisplay,
      }}
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default BlogContentMarkdown;
