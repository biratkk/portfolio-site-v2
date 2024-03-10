"use client";

import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import BlogContentMarkdown from "./BlogContentMarkdown";
import CopyToClipboard from "./CopyToClipboard";
import { NextPageWithLayout } from "../pages/_app";

type MarkdownEditorType = {
  id: string;
  initialText?: string;
  onSubmit?: (s: string) => void;
};

const MarkdownEditor:React.FC<MarkdownEditorType> = ({
  id,
  onSubmit,
  initialText,
}) => {
  const { item, setter } = useLocalStorage<string>(id);

  useEffect(() => {
    if (initialText) {
      setter(initialText);
    }
  }, []);

  return (
    <div className="py-20 px-2 lg:p-20 flex flex-col lg:flex-row w-full h-screen">
      <div className="relative p-2 lg:p-6 flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full">
        <p className="dark:text-white">Input</p>
        {item && (
          <CopyToClipboard
            stringToCopy={item}
            className="duration-200 dark:text-white absolute top-[calc(2.5rem)] right-4 lg:top-[3.5rem] lg:right-8 z-20"
          />
        )}
        {onSubmit && <button className="text-xs duration-200 bg-green-600 h-fit p-2 rounded-md dark:text-white absolute top-[calc(2.5rem)] right-14 lg:top-[3.5rem] lg:right-20 z-30">Submit</button>}
        <textarea
          className=" relative outline-slate-600 outline outline-1 rounded-sm p-4 h-full resize-none shadow-md"
          value={item}
          onChange={(e) => setter(e.target.value)}
        />
      </div>
      <div className="p-2 lg:p-6 flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full">
        <p className="dark:text-white">Preview</p>
        <div className="h-full outline-slate-600 outline outline-1 bg-white rounded-sm p-6 overflow-y-scroll shadow-md">
          <BlogContentMarkdown content={item || ""} />
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;