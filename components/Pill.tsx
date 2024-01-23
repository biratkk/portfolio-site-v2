import { ReactNode } from "react";

type PillProps = {
  children: string | ReactNode;
  gray?: boolean;
};

export default function Pill({ children, gray }: PillProps) {
  return (
    <span
      className={`text-xs px-2 py-1 rounded-full bg-green-900 dark:${gray ? "bg-gray-900" : "bg-green-700"} opacity-70 text-white shadow-sm`}
    >
      {children}
    </span>
  );
}
