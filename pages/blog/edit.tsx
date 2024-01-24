import { useState } from "react";
import BlogContentMarkdown from "../../components/BlogContentMarkdown";
import CopyToClipboard from "../../components/CopyToClipboard";

export default function Edit() {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div className="p-20 flex w-full h-screen">
      <div className="relative p-10 flex flex-col w-1/2 h-full">
        <p className="dark:text-white">Input</p>
        <CopyToClipboard
          stringToCopy={String(inputValue)}
          className=" dark:text-white absolute top-[4.5rem] right-12 z-20"
        />
        <textarea
          className=" relative outline-slate-600 outline outline-1 rounded-md p-4 h-full resize-none shadow-md"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="p-10 flex flex-col w-1/2">
        <p className="dark:text-white">Preview</p>
        <div className="h-full outline-slate-600 outline outline-1 bg-white rounded-md p-6 overflow-y-scroll shadow-md">
          <BlogContentMarkdown content={inputValue} />
        </div>
      </div>
    </div>
  );
}
