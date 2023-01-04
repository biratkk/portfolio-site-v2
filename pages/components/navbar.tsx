import { useEffect, useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import styled from "styled-components";
import { Righteous } from "@next/font/google";
import DarkModeCheckBox from "./atoms/DarkModeCheckBox";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [menuShown, setMenuShown] = useState(false);

  const toggleMenuShown = () => setMenuShown((prev) => !prev);

  return (
    <nav className="p-3 text-black fixed h-1/6 w-full">
      <VisibleNav className="visibleNav flex p-2 max-h-16 justify-between border-2 border-mindaro-300 rounded-l">
        <div className="flex items-center justify-center mx-2">
          <Link href="#home" scroll={false}>
            <h1
              style={righteous.style}
              className="text-center font-bold text-xl dark:text-slate-300"
            >
              Birat Koirala
            </h1>
          </Link>
        </div>
        <div className="flex">
          <div className="flex justify-center items-center mx-2">
            <DarkModeCheckBox />
          </div>
          <button
            onClick={toggleMenuShown}
            className="hover:bg-green-600 p-2 rounded-md text-white bg-green-500 cursor-pointer block md:hidden"
          >
            <AiOutlineMenu className="w-5 h-5" />
          </button>
          <MenuList
            // key={"menu-list"}
            className={`${
              menuShown ? "absolute" : "hidden"
            } md:z-auto top-0 right-0 w-full md:top-auto md:right-auto max-h-screen h-screen md:w-auto md:h-auto flex flex-col items-center p-4 md:relative select-none md:flex md:flex-row md:items-center md:justify-end dark:text-slate-300 dark:bg-transparent`}
          >
            <li className="my-4 md:my-0 md:hidden">
              <AiOutlineClose
                className="w-5 h-5 dark:text-slate-300 border-2 rounded-md border-slate-300 cursor-pointer"
                onClick={toggleMenuShown}
              />
            </li>
            <li className="my-4 md:my-0 md:m1-4 cursor-pointer dark:text-slate-300 hover:text-green-500 dark:hover:text-green-400">
              <Link
                onClick={() => setMenuShown(false)}
                href="#about"
                scroll={false}
              >
                About
              </Link>
            </li>
            <li className="my-4 md:my-0 md:ml-4 cursor-pointer dark:text-slate-300 hover:text-green-500 dark:hover:text-green-400">
              <Link
                onClick={() => setMenuShown(false)}
                href="#projects"
                scroll={false}
              >
                Projects
              </Link>
            </li>
            <li className="my-4 md:my-0 md:ml-4 cursor-pointer dark:text-slate-300 hover:text-green-500 dark:hover:text-green-400">
              <Link
                onClick={() => setMenuShown(false)}
                href="#experience"
                scroll={false}
              >
                Experience
              </Link>
            </li>
            <li className="my-4 md:my-0 md:ml-4">
              <a
                download={true}
                href="/public/Birat_Koirala_CV.pdf"
                className={`hover:bg-green-600 py-2 px-2 rounded-md text-white bg-green-500 cursor-pointer`}
              >
                Resume
              </a>
            </li>
          </MenuList>
        </div>
      </VisibleNav>
    </nav>
  );
};

const VisibleNav = styled.div`
  //TODO delete this
  /* background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18); */

  :has(ul.hidden) {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
`;

const MenuList = styled(motion.ul)`
  @media screen and (max-width: 768px) {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
`;

export default Navbar;
