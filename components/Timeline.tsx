import { DetailedHTMLProps, HTMLAttributes } from "react";
import { formatDate, formatDateMonthYear } from "../util/date";

export default function Timeline(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    children: ReturnType<typeof TimelineItem>[];
  }
) {
  return (
    <div className="flex flex-col gap-12 border-l-4 border-gray-200 dark:border-slate-800 pl-6">
      {props.children.map((child) => (
        <div className="flex items-center">
          <div className="relative">
            <span className="absolute right-[1.15em] bg-white dark:bg-slate-500 w-4 h-4 border rounded-full"></span>
          </div>
          {child}
        </div>
      ))}
    </div>
  );
}

export function TimelineItem({
  date,
  name,
  description,
}: {
  date: Date;
  name: string;
  description: string;
}) {
  return (
    <div>
      <span className="text-sm font-bold text-green-700">
        {formatDateMonthYear(date)}
      </span>
      <h2 className="text-2xl font-semibold ">{name}</h2>
      <p className="">{description}</p>
    </div>
  );
}
