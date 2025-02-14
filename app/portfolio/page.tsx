"use client";
import React, { useEffect, useRef, useState } from "react";
import Particles from "../components/general/StarBackground";
import Left from "../components/left/Left";
import Right from "../components/right/Right";
import IntroModal from "../components/general/IntroModal";
import WelcomeBackModal from "../components/general/WelcomeBackModal";

const Page = () => {
  // Define refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);

  // State to track modals
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isReturningVisit, setIsReturningVisit] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisited");
    const hasSessionModalShown = sessionStorage.getItem("hasShownWelcomeBack");

    if (!hasVisitedBefore) {
      // Show Intro Modal for first-time visitors
      setIsFirstVisit(true);
      localStorage.setItem("hasVisited", "true"); // Mark as visited permanently
    } else if (!hasSessionModalShown) {
      // Show Welcome Back Modal for returning users (once per session)
      setIsReturningVisit(true);
      sessionStorage.setItem("hasShownWelcomeBack", "true"); // Mark as shown for the session
    }
  }, []);

  return (
    <div className="p-4 md:p-14 flex flex-col md:flex-row w-full ">
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

      {/* Intro Modal for first-time visitors */}
      {isFirstVisit && (
        <IntroModal
          isOpen={isFirstVisit}
          onClose={() => setIsFirstVisit(false)} // Close the modal
        />
      )}

      {/* Welcome Back Modal for returning visitors */}
      {isReturningVisit && (
        <WelcomeBackModal
          isOpen={isReturningVisit}
          onClose={() => setIsReturningVisit(false)} // Close the modal
        />
      )}
    </div>
  );
};

export default Page;
