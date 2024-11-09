import React from "react";
import Introduction from "./introduction/Introduction";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

interface RightProps {
  introRef: React.Ref<HTMLDivElement>;
  experienceRef: React.Ref<HTMLDivElement>;
  projectsRef: React.Ref<HTMLDivElement>;
}

const Right: React.FC<RightProps> = ({ introRef, experienceRef, projectsRef }) => {
  return (
    <div className="space-y-10">
      <Introduction ref={introRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
    </div>
  );
};

export default Right;
