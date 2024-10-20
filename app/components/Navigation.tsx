// components/Navigation.tsx
import { useEffect, useState } from 'react';

interface NavigationProps {
  homeInView: boolean;
  projectsInView: boolean;
  skillsInView: boolean;
  contactInView: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ homeInView, projectsInView, skillsInView, contactInView }) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    console.log("Home in view:", homeInView);
    console.log("Projects in view:", projectsInView);
    console.log("Skills in view:", skillsInView);
    console.log("Contact in view:", contactInView);

    if (homeInView) setActiveSection('home');
    else if (projectsInView) setActiveSection('projects');
    else if (skillsInView) setActiveSection('skills');
    else if (contactInView) setActiveSection('contact');
  }, [homeInView, projectsInView, skillsInView, contactInView]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 p-4 z-50">
      <ul className="flex justify-around text-white">
        <li className={activeSection === 'home' ? 'font-bold' : ''}>
          <a href="#home">Home</a>
        </li>
        <li className={activeSection === 'projects' ? 'font-bold' : ''}>
          <a href="#projects">Projects</a>
        </li>
        <li className={activeSection === 'skills' ? 'font-bold' : ''}>
          <a href="#skills">Skills</a>
        </li>
        <li className={activeSection === 'contact' ? 'font-bold' : ''}>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
