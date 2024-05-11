import { cn } from "@nextui-org/react";
import { useRouter } from "next/router";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";

const pages = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Experience",
    href: "/timeline"
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export default function Links(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  const router = useRouter();
  const [selected] = useState(router.asPath);

  return (
    <div {...props} className="w-full flex flex-col mt-2">
      {pages.map((props, idx) => (
        <Link key={idx} selected={props.href === selected} {...props} />
      ))}
    </div>
  );
}

function Link({
  name,
  href,
  selected,
}: {
  name: string;
  href: string;
  selected?: boolean;
}) {
  return (
    <a
      className={`font-semibold px-2 py-1 -ml-2 border-l-2 
        ${
          selected
            ? "hover:border-gray-600 border-gray-600 dark:hover:border-gray-700 dark:border-gray-700"
            : "border-white dark:border-black hover:border-gray-200 dark:hover:border-gray-800"
        }`}
      href={href}
    >
      {name}
    </a>
  );
}
