"use client";
import React, { useRef } from "react";
import Left from "./components/left/Left";
import Right from "./components/right/Right";
import Dot from "./components/general/Dot";
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
        {/* Main wrapper */}
        <div className="p-4 md:p-14 flex flex-col md:flex-row w-full">
          {/* Left component */}
          <div className="w-full md:w-96 md:fixed md:top-14 md:left-14 mb-6 md:mb-0">
            <Left />
          </div>

          {/* Right content */}
          <div
            ref={rightContainerRef}
            className="flex w-full md:ml-64 justify-end overflow-y-auto mt-14"
          >
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
