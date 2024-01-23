'use client'

import { useDarkMode } from "../context/DarkModeContext";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  prism,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { MdContentCopy } from "react-icons/md";
import { useState } from "react";
import { Tooltip } from "@nextui-org/react";
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
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const match = /language-(\w+)/.exec(className || "");

  return match ? (
    <div className="block relative">
      <Tooltip
        className="dark:text-white"
        isOpen={isNotifOpen}
        content="Copied!"
        placement="left"
      >
        <button
          onClick={async () => {
            const text = String(children);
            if ("clipboard" in navigator) {
              await navigator.clipboard.writeText(text);
            } else {
              document.execCommand("copy", true, text);
            }
            setIsNotifOpen(true);
            setTimeout(() => {
              setIsNotifOpen(false);
            }, 1000);
          }}
          className="absolute right-2 top-2 cursor-pointer shadow-md duration-200 bg-green-600 hover:bg-green-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800 rounded-md p-2"
        >
          <MdContentCopy />
        </button>
      </Tooltip>
      <SyntaxHighlighter
        customStyle={{ borderRadius: "5px" }}
        language={match[1]}
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
