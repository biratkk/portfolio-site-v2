import iconMappings, { Icons } from "../../../util/iconMappings";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Roboto_Flex } from "@next/font/google";
import styled from "styled-components";

const roboto = Roboto_Flex({ weight: "100" , subsets:["latin"]});

const GithubIcon = iconMappings.GITHUB;
const FacebookIcon = iconMappings.FACEBOOK;
const LinkedinIcon = iconMappings.LINKEDIN;
const TwitterIcon = iconMappings.TWITTER;

const IconsShown = [GithubIcon, FacebookIcon, LinkedinIcon, TwitterIcon];
type ContactMeSidebarType = {};
const ContactMeSidebar = ({}: ContactMeSidebarType) => {
  const [currentIcons, setCurrentIcons] = useState(IconsShown);

  return (
    <div>
      <div className="ml-3 hidden lg:block w-11 h-full fixed">
        <div id="top" className="flex justify-center items-center h-1/2"></div>
        <div
          id="icons"
          className={`rounded-tr-lg rounded-br-lg flex flex-col justify-center items-center h-1/4 `}
        >
          <AnimatePresence>
            {currentIcons.map((Icon) => {
              return (
                <motion.a
                  target={"_blank"}
                  href={Icon.url}
                  className={`flex h-1/4 w-full justify-center items-center p-2 shadow-lg dark:shadow-xl rounded-full`}
                  whileHover={{ translateY: "-3px" }}
                  rel="noopener noreferrer"
                >
                  <Icon.icon className="dark:text-white text-black hover:text-green-500 dark:hover:text-green-500 cursor-pointer w-full h-full" />
                </motion.a>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      <div className="ml-3 hidden lg:block w-11 right-0 h-full fixed">
        <div id="top" className="flex justify-center items-center h-1/2"></div>
        <div id="email" className="flex justify-center h-1/4">
          <Email
            href="mailto:koiralabirat@gmail.com"
            className="text-black dark:text-slate-300 tracking-widest "
          >
            koiralabirat@gmail.com
          </Email>
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
