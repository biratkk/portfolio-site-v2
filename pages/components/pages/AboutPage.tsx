import pictureOfMe from "../../../public/picture-me.png";
import { Questrial, Prompt, Open_Sans, Inter } from "@next/font/google";
import PromptButton from "../atoms/PromptButton";
import BackgroundParticles from "../BackgroundParticles";
import styled from "styled-components";
import Link from "../atoms/Link";

const questrial = Questrial({ weight: "400" });
const prompt = Prompt({ weight: "400" });
const promptBold = Prompt({ weight: "700" });
const opensans = Open_Sans({ weight: "400" });
const inter = Inter({ subsets: ["latin"] });
type AboutPageType = {};

const aboutInfo: { header: string; description: string }[] = [
  {
    header: "",
    description: "",
  },
  {
    header: "",
    description: "",
  },
  {
    header: "",
    description: "",
  },
];

const AboutPage = ({}: AboutPageType) => {
  return (
      <div id="about" className="flex justify-center items-center w-screen h-screen overflow-hidden">
        <div className="w-5/6 flex flex-col md:flex-row justify-around">
          <AllText className="md:w-2/4 lg:w-1/3 text-base md:text-lg dark:text-slate-300">
            <HoverHeader className="">01. About</HoverHeader>
            {
              // TODO: Improve this bit
            }
            <p style={opensans.style} className="text-md">
              Hi there! My name is Birat Koirala and I am a software engineer
              currently studying computer science at the{" "}
              <Link href="https://www.leeds.ac.uk/"> University of Leeds</Link>.
              {/* Hello, my name is Birat. Currently, I'm a student in
            the University of Leeds enrolled in a Computer Science course. My
            initial interest in programming itself started when I wanted to make
            a multiple choice game in the shell around 5 years ago. And I made
            it. Then, I made it in Python. Then, I made it in Java. I stuck with
          Java. */}
            </p>
            <p style={opensans.style} className="text-md mt-1 md:mt-2">
              I have a passion for learning and am constantly seeking out new
              challenges and opportunities to grow as a developer. In my free
              time, you can find me honing my skills by tinkering with{" "}
              <Link href="https://github.com/biratkk">personal projects</Link> or exploring new technologies.
              {/* This led me to learn the fundamentals of
            programming in Java where I continued to build projects and do
          coding exercises to strengthen my knowledge. */}
            </p>
            <p style={opensans.style} className="text-md mt-2">
              Thank you for visiting my portfolio. I hope you enjoy learning
              more about my work and experiences.
            </p>
          </AllText>
          <div className="flex items-center justify-center w-1/3">
            <img
              className="w-30 h-30 lg:w-80 lg:h-80 md:w-48 md:h-48 aspect-square mt-2 ml-2 hover:mt-0 hover:ml-0 duration-500 bg-green-800"
              src={pictureOfMe.src}
              alt="Picture of me"
            />
          </div>
        </div>
      </div>
  );
};

const AllText = styled.div``;

export const HoverHeader = styled.h2`
  font-size: 1.875rem /* 30px */;
  line-height: 2.25rem /* 36px */;
  font-weight: 700;
  margin-bottom: 0.5rem /* 8px */;
  letter-spacing: 0.1em;
  /* padding-left: 9px; */
  /* border-radius: 5px;*/
  /* color: rgb(34 197 94) ;  */
  /* box-shadow: 0px 5px 8px -3px rgb(34 197 94);  */
`;

const TextLink = styled.a`
  color: rgb(34 197 94);

  :hover {
    text-decoration: underline;
  }
`;

export default AboutPage;
