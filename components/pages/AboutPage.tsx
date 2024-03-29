import styled from "@emotion/styled";
import Image from "next/image";
import pictureOfMe from "../../public/picture-me.png";
import { opensans } from "../../fonts";
import Link from "../atoms/Link";

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
      <div id="about" className="flex justify-center items-center w-screen h-screen overflow-hidden ">
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
            <Image
              className="w-30 h-30 shadow-xl object-cover lg:w-80 lg:h-80 md:w-48 md:h-48 aspect-square border-green-500 border-2 rounded-full mt-2 ml-2 hover:mt-0 hover:ml-0 duration-500"
              src={pictureOfMe}
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
