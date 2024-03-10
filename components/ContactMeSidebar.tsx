import Image from "next/image";
import { ReactNode } from "react";
import { inter } from "../fonts";
import pictureOfMe from "../public/picture-me.png";
import Links from "./Links";
import Link from "./atoms/Link";
import DarkModeCheckBox from "./atoms/DarkModeCheckBox";

type ContactMeSidebarType = {
  children: ReactNode;
};
const ContactMeSidebar = ({ children }: ContactMeSidebarType) => {
  return (
    <div
      style={inter.style}
      className="flex justify-center gap-8 flex-col md:flex-row container mx-auto xl:px-32 py-20 "
    >
      <div className="flex flex-col w-72">
        <div className="shadow-xl rounded-full overflow-hidden w-24 aspect-square">
          <Image
            key={"Hello"}
            className="w-full"
            src={pictureOfMe}
            alt="Picture of me"
            objectFit="cover"
            unoptimized
          />
        </div>
        <h1 className="font-semibold mt-2 rounded-r-md">
          Birat Koirala
        </h1>
        <p className="text-sm mt-1 w-72">
          Software Engineer, studying computer science at{" "}
          <Link href="https://www.leeds.ac.uk/">University of Leeds</Link>.
          Interested in software development, design, graphics and education.
        </p>
        <div className="mt-2 gap-2 text-sm flex">
          <Link newTab href="https://github.com/biratkk">
            Github
          </Link>
          <Link newTab href="https://twitter.com/biratkk">
            Twitter
          </Link>
          <Link newTab href="https://www.linkedin.com/in/birat-koirala/">
            Linkedin
          </Link>
          <Link newTab href="mailto:koiralabirat@gmail.com">
            Mail
          </Link>
          <Link href="/Birat_Koirala_CV.pdf">Resume</Link>
        </div>
        <Links className="mt-4" />
        <div className="mt-4">
          <DarkModeCheckBox />
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ContactMeSidebar;
