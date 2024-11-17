"use client";
import React, { useEffect, useState } from "react";
import IntroModal from "./IntroModal";

const DesktopNavigation = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["introduction", "projects", "experience"];
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#introduction", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className="hidden md:block space-y-4 text-light_greyish">
      <ul className="flex flex-col space-y-4">
        {navLinks.map((link, index) => (
          <li key={index} className="flex items-center space-x-2">
            {/* Active Section Indicator: Hollow rectangle */}
            <span
              className={`block h-4 w-4 mb-1 rounded-md border-2 ${
                activeSection === link.href.slice(1)
                  ? "border-purplish bg-purplish"
                  : "border-gray-600"
              }`}
            ></span>
            {/* Navigation Link */}
            <a
              href={link.href}
              className={`transition-colors duration-300 ${
                activeSection === link.href.slice(1)
                  ? "text-light_greyish font-bold"
                  : "text-gray-500"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
