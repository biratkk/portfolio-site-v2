'use client'

import { useDarkMode } from "../context/DarkModeContext";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  prism,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import CopyToClipboard from "./CopyToClipboard";


type CodeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export default function CodeDisplay({
  className,
  children,
  ...props
}: CodeProps) {
  const [darkMode] = useDarkMode();

  const match = /language-(\w+)/.exec(className || "");

  return match ? (
    <div className="block relative">
     <CopyToClipboard popupColorClass={darkMode ? "text-white" : "text-black"} stringToCopy={String(children)} className="absolute right-2 top-2"/>
      <SyntaxHighlighter
        customStyle={{ borderRadius: "5px" }}
        language={match[1]}
        lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
        style={darkMode ? atomDark : prism}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className={className} {...props} data-code-inline="true">
      {children}
    </code>
  );
}