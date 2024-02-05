import ContactMeSidebar from "../components/molecules/ContactMeSidebar";
import BackgroundParticles from "../components/BackgroundParticles";
import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import ProjectsPage from "../components/pages/ProjectsPage";
import ExperiencePage from "../components/pages/ExperiencePage";
import ContactMeFooter from "../components/pages/ContactMeFooter";
import { InferGetServerSidePropsType } from "next";
import { projectPreview } from "../components/contentful/projectPreview";
import { setTimeout } from "timers/promises";

export async function getServerSideProps() {
  const projectEntries = await projectPreview.getEntries({content_type: 'projectPreview'});
  return { props: { projectEntries } };
}

export default function Home({
  projectEntries,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
