"use client";

import React from "react";
import { BiLink } from "react-icons/bi";

interface Project {
  year: number;
  name: string;
  madeAt: string;
  builtWith: string[];
  link: string;
  linkLabel: string;
}

const projects = [
    {
      year: 2023,
      name: "Emerson Collective",
      madeAt: "Upstatement",
      builtWith: ["Next.js", "TypeScript", "SCSS", "Contentful"],
      link: "https://emersoncollective.com",
      linkLabel: "emersoncollective.com",
    },
    {
      year: 2023,
      name: "Harvard Business School Next.js Site",
      madeAt: "Upstatement",
      builtWith: ["React", "TypeScript", "Next.js", "Contentful"],
      link: "https://hbs.edu",
      linkLabel: "hbs.edu",
    },
    {
      year: 2022,
      name: "Harvard Business School Design System",
      madeAt: "Upstatement",
      builtWith: ["Storybook", "React", "TypeScript"],
      link: "https://hbsdesignsystem.com",
      linkLabel: "hbsdesignsystem.com",
    },
    {
      year: 2022,
      name: "Threadable",
      madeAt: "Upstatement",
      builtWith: ["React Native", "Ruby on Rails", "Firebase"],
      link: "https://apps.apple.com",
      linkLabel: "apps.apple.com",
    },
    {
      year: 2022,
      name: "Pratt",
      madeAt: "Upstatement",
      builtWith: [
        "WordPress",
        "Timber",
        "WordPress Multisite",
        "Gutenberg",
        "JavaScript",
      ],
      link: "https://pratt.edu",
      linkLabel: "pratt.edu",
    },
    {
      year: 2023,
      name: "Portfolio Redesign",
      madeAt: "Freelance",
      builtWith: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "https://portfolioredesign.com",
      linkLabel: "portfolioredesign.com",
    },
    {
      year: 2023,
      name: "E-commerce Store",
      madeAt: "Agency XYZ",
      builtWith: ["React", "Node.js", "MongoDB", "Redux"],
      link: "https://ecommercestore.com",
      linkLabel: "ecommercestore.com",
    },
    {
      year: 2023,
      name: "SaaS Dashboard",
      madeAt: "Upstatement",
      builtWith: ["Vue.js", "Firebase", "SCSS"],
      link: "https://saasdashboard.com",
      linkLabel: "saasdashboard.com",
    },
    {
      year: 2022,
      name: "Educational App",
      madeAt: "EduTech Inc.",
      builtWith: ["React Native", "Expo", "GraphQL"],
      link: "https://educationalapp.com",
      linkLabel: "educationalapp.com",
    },
    {
      year: 2023,
      name: "Weather Tracker",
      madeAt: "Personal Project",
      builtWith: ["Python", "Flask", "React", "Bootstrap"],
      link: "https://weathertracker.com",
      linkLabel: "weathertracker.com",
    },
    {
      year: 2022,
      name: "Event Booking Platform",
      madeAt: "Startup Co.",
      builtWith: ["Django", "React", "PostgreSQL"],
      link: "https://eventbookingplatform.com",
      linkLabel: "eventbookingplatform.com",
    },
    {
      year: 2023,
      name: "AI Writing Assistant",
      madeAt: "Tech AI",
      builtWith: ["Next.js", "OpenAI API", "TypeScript"],
      link: "https://aiwritingassistant.com",
      linkLabel: "aiwritingassistant.com",
    },
    {
      year: 2021,
      name: "Blogging Platform",
      madeAt: "Freelance",
      builtWith: ["Gatsby", "GraphQL", "Tailwind CSS"],
      link: "https://bloggingplatform.com",
      linkLabel: "bloggingplatform.com",
    },
    {
      year: 2021,
      name: "Fitness Tracker",
      madeAt: "HealthTech",
      builtWith: ["React Native", "Firebase", "Redux"],
      link: "https://fitnesstracker.com",
      linkLabel: "fitnesstracker.com",
    },
    {
      year: 2022,
      name: "Travel Companion App",
      madeAt: "Wanderlust Inc.",
      builtWith: ["Flutter", "Dart", "Firebase"],
      link: "https://travelcompanionapp.com",
      linkLabel: "travelcompanionapp.com",
    },
  ];
  

const ProjectTable = () => {
  return (
    <div className="overflow-x-auto bg-dark_bg text-white rounded-lg shadow-lg">
      <table className="table-auto w-full border-collapse ">
        <thead className="bg-subdark text-gray-300">
          <tr className="border-b border-gray-700 mb-3">
            <th className="p-4 text-left font-medium text-purplish">Year</th>
            <th className="p-4 text-left font-medium text-purplish">Project</th>
            {/* "Built with" column hidden on small screens */}
            <th className="p-4 text-left font-medium hidden md:table-cell text-purplish">
              Built with
            </th>
            {/* "Link" column hidden on small screens */}
            <th className="p-4 text-left font-medium hidden md:table-cell text-purplish">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr
              key={index}
              className="border-b border-gray-700 hover:bg-subdark transition-colors"
            >
              <td className="p-4">{project.year}</td>
              {/* Conditional rendering for project title */}
              <td className="p-4 font-normal">
                {/* Show title as a link on mobile, plain text on desktop */}
                <span className="block md:hidden">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-purplish transition-colors"
                  >
                    {project.name}
                    <BiLink className="text-lg" />
                  </a>
                </span>
                <span className="hidden md:block">{project.name}</span>
              </td>
              {/* "Built with" column hidden on small screens */}
              <td className="p-4 hidden md:table-cell">
                <div className="flex flex-wrap gap-2">
                  {project.builtWith.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-normal bg-purplish rounded-lg text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </td>
              {/* "Link" column hidden on small screens */}
              <td className="p-4 hidden md:table-cell">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purplish font-normal hover:underline flex items-center"
                >
                  {project.linkLabel}
                  <span className="ml-1">↗</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
