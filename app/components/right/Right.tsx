import React from "react";
import Introduction from "./introduction/Introduction";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Particles from "../general/StarBackground";

interface RightProps {
  introRef: React.Ref<HTMLDivElement>;
  experienceRef: React.Ref<HTMLDivElement>;
  projectsRef: React.Ref<HTMLDivElement>;
}

const Right: React.FC<RightProps> = ({ introRef, experienceRef, projectsRef }) => {
  return (
    <div className="space-y-10">
      <Introduction ref={introRef} />
                  <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <Experience ref={experienceRef} />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <Projects ref={projectsRef} />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
    </div>
  );
};

export default Right;
