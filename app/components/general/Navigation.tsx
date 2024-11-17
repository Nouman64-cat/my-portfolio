"use client";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["introduction", "projects", "experience", "free-resources", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset for better accuracy

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.clientHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      });

      // Update scroll state to show sticky bar only after scrolling
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-6 left-0 right-0 bg-dark_greyish border-2 border-purple-400 rounded-xl transition-all duration-300 block md:hidden mx-4 ${
        isScrolled
          ? "shadow-[0_0_10px_5px_rgba(155,93,229,1)] translate-y-0" // Updated shadow color to match the button's purple shade
          : "-translate-y-full"
      } z-50`}
    >
      <nav className="flex justify-center space-x-4 mx-3 py-2 px-4">
        <a
          href="#introduction"
          className={`py-2 text-gray-300 ${
            activeSection === "introduction" ? "text-purplish font-semibold" : ""
          }`}
        >
          About
        </a>
        <a
          href="#experience"
          className={`py-2 text-gray-300 ${
            activeSection === "experience" ? "text-purplish font-semibold" : ""
          }`}
        >
          Experience
        </a>
        <a
          href="#projects"
          className={`py-2 text-gray-300 ${
            activeSection === "projects" ? "text-purplish font-semibold" : ""
          }`}
        >
          Projects
        </a>
        {/* Uncomment to add other sections */}
        {/* <a
          href="/free-resources"
          className={`py-2 text-gray-300 ${activeSection === 'free-resources' ? 'text-purplish font-semibold' : ''}`}
        >
          Free Resources
        </a> */}
        {/* 
        <a
          href="#contact"
          className={`py-2 text-gray-300 ${activeSection === 'contact' ? 'text-purplish font-semibold' : ''}`}
        >
          Contact Me
        </a> */}
      </nav>
    </div>
  );
};

export default Navigation;
