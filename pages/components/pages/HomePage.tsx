import PromptButton from "../atoms/PromptButton";
import { Questrial, Prompt } from "@next/font/google";
import learningSVG from '../../../public/learning-illustration.svg'
import pictureOfMe from "../../../public/picture-me.png";
import Navbar from "../navbar";
import ContactMeSidebar from "../molecules/ContactMeSidebar";
import BackgroundParticles from "../BackgroundParticles";
import InspirationSVG from "../atoms/SVGs/InspirationSVG";

const questrial = Questrial({ weight: "400", subsets:["latin"] });
const prompt = Prompt({ weight: "500", subsets:["latin"] });

const HomePage = () => {
  return (
      <div id="home" className="flex flex-row items-center justify-center h-screen">
        <div className="w-5/6 lg:w-1/2 flex flex-col items-start text-black dark:text-slate-300">
          <span style={questrial.style} className="text-lg">
            Hi, my name is
          </span>
          <h1
            style={prompt.style}
            className="text-5xl md:text-6xl lg:text-7xl text-green-500 py-2 mt-4 font-extrabold leading-tight"
          >
            Birat Koirala
          </h1>
          <h2 style={prompt.style} className="text-5xl md:text-6xl lg:text-7xl text-green-600 py-2 leading-tight">
            I love to learn.
          </h2>
          <span style={questrial.style} className="md:w-2/3 md:text-lg">
            {`I'm a software engineer that specialises in full stack application
            development (amongst other things). I love to create and participate in
            projects that provide a different perspective while 
            inherently solving the same problem.`}
          </span>
        </div>
        <div className="hidden lg:block">
          <InspirationSVG width={300} height={300}/>
        </div>
      </div>
  );
};

export default HomePage;
