import { useState } from "react";
import BlogContentMarkdown from "../../components/BlogContentMarkdown";
import CopyToClipboard from "../../components/CopyToClipboard";

export default function Edit() {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div className="py-20 px-2 lg:p-20 flex flex-col lg:flex-row w-full h-screen">
      <div className="relative p-2 lg:p-6 flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full">
        <p className="dark:text-white">Input</p>
        <CopyToClipboard
          stringToCopy={String(inputValue)}
          className=" dark:text-white absolute top-[calc(2.5rem)] right-4 lg:top-[3.5rem] lg:right-8 z-20"
        />
        <textarea
          className=" relative outline-slate-600 outline outline-1 rounded-md p-4 h-full resize-none shadow-md"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="p-2 lg:p-6 flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full">
        <p className="dark:text-white">Preview</p>
        <div className="h-full outline-slate-600 outline outline-1 bg-white rounded-md p-6 overflow-y-scroll shadow-md">
          <BlogContentMarkdown content={inputValue} />
        </div>
      </div>
    </div>
  );
}
