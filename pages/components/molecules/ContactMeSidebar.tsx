import iconMappings, { Icons } from "../../../util/iconMappings";
import { motion } from "framer-motion";
import { useState } from "react";
import { Roboto_Flex } from "@next/font/google";
import styled from "@emotion/styled";

const roboto = Roboto_Flex({ weight: "100", subsets: ["latin"] });

const GithubIcon = iconMappings.GITHUB;
const FacebookIcon = iconMappings.FACEBOOK;
const LinkedinIcon = iconMappings.LINKEDIN;
const TwitterIcon = iconMappings.TWITTER;

const IconsShown = [
  GithubIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
];
type ContactMeSidebarType = {};
const ContactMeSidebar = ({}: ContactMeSidebarType) => {
  const [currentIcons, setCurrentIcons] = useState(IconsShown);

  return (
    <div>
      <div className="ml-3 hidden lg:block w-11 h-full fixed">
        <div id="top" className="flex justify-center items-center h-2/5"></div>
        <div
          className={`flex gap-4 py-4 flex-col items-center shadow-md outline outline-1 dark:outline-slate-600 outline-slate-100 justify-around rounded-full`}
        >
          {currentIcons.map((Icon, idx) => {
            return (
              <div
                key={idx}
                className={`flex justify-center items-center rounded-full`}
              >
                <motion.a
                  target={"_blank"}
                  href={Icon.url}
                  whileHover={{ translateY: "-3px" }}
                  rel="noopener noreferrer"
                >
                  <Icon.icon
                    size={28}
                    className="aspect-square dark:text-white text-black hover:text-green-500 dark:hover:text-green-500 cursor-pointer"
                  />
                </motion.a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Email = styled(motion.a)`
  writing-mode: vertical-rl;
  rotate: 180deg;
  :hover {
    color: rgb(34 197 94);
    /* transform: translateY(4px); */
  }
`;

export default ContactMeSidebar;
