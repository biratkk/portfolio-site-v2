import LoadingLandingPageCover from "./components/molecules/LoadingLandingPage";
import Navbar from "./components/navbar";
import useDarkMode from "./hooks/useDarkMode";

const About = () => {
    const [darkMode] = useDarkMode();
  return (
    <main className={`${darkMode ? 'dark' : ''}`}>
      <LoadingLandingPageCover duration={0.25}>
        <Navbar />
      </LoadingLandingPageCover>
    </main>
  );
};

export default About;
