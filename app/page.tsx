"use client"
import React, { useRef } from "react";
import Left from "./components/left/Left";
import Right from "./components/right/Right";
import Dot from "./components/general/Dot";
import IntersectionNavigation from "./components/left/IntersectionNavigation";

const Page = () => {
  // Define refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);

  return (
    <Dot>
      <div className="p-20 flex justify-between w-full">
        {/* Pass the rightContainerRef as root to IntersectionNavigation */}
        {/* <IntersectionNavigation root={rightContainerRef.current} /> */}
        <div className="fixed h-screen">
          <Left />
        </div>
        <div
          ref={rightContainerRef}
          className="flex w-full justify-end overflow-y-auto"
        >
          {/* Pass refs for each section to Right */}
          <Right introRef={introRef} experienceRef={experienceRef} projectsRef={projectsRef} />
        </div>
      </div>
    </Dot>
  );
};

export default Page;
