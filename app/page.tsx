"use client";
import React, { useRef } from "react";
import Left from "./components/left/Left";
import Right from "./components/right/Right";
import Dot from "./components/general/Dot";
import IntersectionNavigation from "./components/general/IntersectionNavigation";
import StarBackground from "./components/general/StarBackground";

const Page = () => {
  // Define refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);

  return (
    <StarBackground>
      <Dot>
        <div className="p-20 flex justify-between w-full">
          {/* Pass the rightContainerRef as root to IntersectionNavigation */}
          {/* <IntersectionNavigation root={rightContainerRef.current} /> */}
          <div className="fixed h-screen hidden md:block">
            {" "}
            {/* Hidden on mobile screens */}
            <Left />
          </div>
          <div
            ref={rightContainerRef}
            className="flex w-full justify-end overflow-y-auto"
          >
            {/* Pass refs for each section to Right */}
            <Right
              introRef={introRef}
              experienceRef={experienceRef}
              projectsRef={projectsRef}
            />
          </div>
        </div>
      </Dot>
    </StarBackground>
  );
};

export default Page;
