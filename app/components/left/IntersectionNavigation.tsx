"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

interface IntersectionNavigationProps {
  root?: Element | null;
}

const IntersectionNavigation: React.FC<IntersectionNavigationProps> = ({ root }) => {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  const { ref: introRef, inView: introInView } = useInView({ root, threshold: 0.5 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ root, threshold: 0.5 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ root, threshold: 0.5 });

  useEffect(() => {
    if (introInView) {
      setActiveSection("introduction");
      console.log("Introduction is in view");
    } else if (experienceInView) {
      setActiveSection("experience");
      console.log("Experience is in view");
    } else if (projectsInView) {
      setActiveSection("projects");
      console.log("Projects is in view");
    }
  }, [introInView, experienceInView, projectsInView]);

  return (
    <nav className="fixed top-0 left-0 p-4 bg-dark_bg text-white">
      <ul className="flex flex-col gap-4">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`${activeSection === section.id ? "text-green-500 font-bold" : "text-gray-400"}`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default IntersectionNavigation;
