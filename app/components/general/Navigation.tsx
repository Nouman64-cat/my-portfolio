"use client"
import React, { useEffect, useState } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'projects', 'experience', 'free-resources', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for better accuracy

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.clientHeight > scrollPosition) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className="mt-4 flex flex-col space-y-2">
        <a
          href="#introduction"
          className={`py-2 text-gray-300 ${activeSection === 'introduction' ? ' text-purplish' : ''}`}
        >
          Introduction
        </a>
        <a
          href="#experience"
          className={`py-2 text-gray-300 ${activeSection === 'experience' ? ' text-purplish' : ''}`}
        >
          Experience
        </a>
        <a
          href="#projects"
          className={`py-2 text-gray-300 ${activeSection === 'projects' ? ' text-purplish' : ''}`}
        >
          Projects
        </a>
        {/* <a
          href="#free-resources"
          className={`py-2 text-gray-300 ${activeSection === 'free-resources' ? ' text-purplish' : ''}`}
        >
          Free Resources
        </a>
        <a
          href="#contact"
          className={`py-2 text-gray-300 ${activeSection === 'contact' ? ' text-purplish' : ''}`}
        >
          Contact Me
        </a> */}
      </nav>
    </div>
  );
};

export default Navigation;
