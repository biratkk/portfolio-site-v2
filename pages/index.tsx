import Navbar from "./components/navbar";
import ContactMeSidebar from "./components/molecules/ContactMeSidebar";
import BackgroundParticles from "./components/BackgroundParticles";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ExperiencePage from "./components/pages/ExperiencePage";
import ContactMeFooter from "./components/pages/ContactMeFooter";
import { InferGetServerSidePropsType } from "next";
import { projectPreview } from "./components/contentful/projectPreview";

export async function getServerSideProps() {
  const projectEntries = await projectPreview.getEntries({content_type: 'projectPreview'});
  console.log(projectEntries)
  return { props: { projectEntries } };
}

export default function Home({
  projectEntries,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(projectEntries);
  return (
    <div className="w-screen h-screen snap-mandatory snap-y">
      <ContactMeSidebar />
      <BackgroundParticles />
      <HomePage />
      <AboutPage />
      <ProjectsPage projectDetails={projectEntries} />
      <ExperiencePage />
      <ContactMeFooter />
    </div>
  );
}
