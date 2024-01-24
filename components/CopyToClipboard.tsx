import { Tooltip } from "@nextui-org/react";
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";

type CopyToClipboardProps = {
  stringToCopy: string;
  popupColorClass?: string;
};

export default function CopyToClipboard({
  stringToCopy,
  className,
  popupColorClass,
}: CopyToClipboardProps &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  return (
    <Tooltip
      isOpen={isNotifOpen}
      showArrow
      offset={-1}
      content="Copied!"
      placement="left"
      classNames={{
        content:[popupColorClass, "bg-green-600 text-white text-sm p-1 px-2 rounded-lg shadow-md"],
      }}
    >
      <button
        onClick={async () => {
          const text = String(stringToCopy);
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
        className={
          "cursor-pointer shadow-md duration-200 bg-green-600 hover:bg-green-700 text-white rounded-md p-2 " +
          className
        }
      >
        <MdContentCopy />
      </button>
    </Tooltip>
  );
}
