import { useEffect, useState } from "react";
import styled from "styled-components";


type BackgroundParticlesType = {};

const BackgroundParticles = ({}: BackgroundParticlesType) => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);
  return (
    <ParticleContainer className="-z-10 fixed w-screen h-screen dark:bg-slate-700">
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      
    </ParticleContainer>
  );
};

const ParticleContainer = styled.div`
`;
const random = (start: number, max: number) =>
  (start ?? 1) + Math.random() * max;

export default BackgroundParticles;
