import Navbar from "./components/navbar";
import LoadingLandingPageCover from "./components/molecules/LoadingLandingPage";
import ContactMeSidebar from "./components/molecules/ContactMeSidebar";
import BackgroundParticles from "./components/BackgroundParticles";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ExperiencePage from "./components/pages/ExperiencePage";
import styled from "styled-components";
import ContactMeFooter from "./components/pages/ContactMeFooter";
import { BlogEntryResponse } from "./components/contentful";
import axios from "axios";
import { ProjectDetailsType } from "./components/atoms/ProjectSquare";


export default function Home() {
  return (
    <MainElement className={`w-screen h-screen`}>
      <LoadingLandingPageCover duration={0.25}>
        <ContactMeSidebar />
        <BackgroundParticles />
        <HomePage />
        <AboutPage />
        <ProjectsPage/>
        <ExperiencePage />
        <ContactMeFooter />
      </LoadingLandingPageCover>
    </MainElement>
  );
}

const MainElement = styled.div`
  scroll-snap-type: y mandatory;
`;
