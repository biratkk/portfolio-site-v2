import Head from "next/head";
import Navbar from "./components/navbar";
import useDarkMode from "../hooks/useDarkMode";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingLandingPage from "./components/molecules/LoadingLandingPage";
import LoadingCube from "./components/atoms/LoadingCube";
import LoadingLandingPageCover from "./components/molecules/LoadingLandingPage";
import Image from "next/image";
import pictureOfMe from "../public/picture-me.png";
import { Questrial, Prompt } from "@next/font/google";
import PromptButton from "./components/atoms/PromptButton";
import ContactMeSidebar from "./components/molecules/ContactMeSidebar";
import BackgroundParticles from "./components/BackgroundParticles";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ExperiencePage from "./components/pages/ExperiencePage";
import styled from "styled-components";
import ContactMeFooter from "./components/pages/ContactMeFooter";

export default function Home() {
  // const navbarContext = useNavbarContext();
  const [darkMode] = useDarkMode();
  return (
    <>
      <Head>
        <title>Birat Koirala</title>
        <meta name="description" content="Portfolio Site of Birat Koirala" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainElement className={`${darkMode ? "dark" : ""} w-screen h-screen `}>
        <LoadingLandingPageCover duration={1}>
          <ContactMeSidebar />
          <BackgroundParticles />
          <Navbar />
          <HomePage />
          <AboutPage />
          <ProjectsPage />
          <ExperiencePage />
          <ContactMeFooter/>
        </LoadingLandingPageCover>
      </MainElement>
    </>
  );
}


const MainElement = styled.main`
  scroll-snap-type: y mandatory;
`