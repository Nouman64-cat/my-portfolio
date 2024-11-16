import React from "react";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

const Header = () => {
  // Social links array
  const socialLinks = [
    {
      href: "https://github.com/Nouman64-cat",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/nouman-ejaz-64251125b/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "https://dribbble.com/noumanejaz64",
      label: "Dribbble",
      icon: <FaDribbble />,
    },
  ];

  return (
    <div className="space-y-4 mt-24 md:mt-14">
      {/* Name and Introduction */}
      <h1 className="text-purplish text-5xl font-bold">Nouman Ejaz</h1>
      <p className="text-light_greyish">Frontend Engineer | UI/UX Designer</p>
      <p className="text-light_greyish text-sm">
        I build experience with user interfaces and intriguing designs
      </p>

      {/* Social Links */}
      <div className="flex gap-6 mt-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light_greyish hover:text-purplish transition-colors duration-300 text-2xl"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
