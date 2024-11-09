import React from "react";
import ProjectTags from "./ProjectTags"; // Import the ProjectTags component
import { HiOutlineCalendar } from "react-icons/hi2"; // Example icon for project duration

const projects = [
  {
    title: "Portfolio Website",
    duration: "2023 — Present",
    description:
      "A personal portfolio website to showcase my projects, experience, and skills. Built using Next.js and Tailwind CSS with animations and responsive design.",
    tags: ["Next.js", "Tailwind CSS", "JavaScript", "Vercel"],
  },
  {
    title: "E-commerce Application",
    duration: "2022 — 2023",
    description:
      "Developed a full-featured e-commerce application with user authentication, product search, and secure checkout. Integrated with Stripe for payment processing.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
  },
];

const Projects = () => {
  return (
    <div className="text-white max-w-3xl mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className="mb-8 hover:border-2 hover:border-purplish hover:border-opacity-10 rounded-2xl p-4 hover:bg-light_greenish hover:bg-opacity-10 transition duration-500 ease-in-out"
        >
          {/* Project Title */}
          <h3 className="text-2xl font-medium text-bluish">
            {project.title}
          </h3>

          {/* Duration */}
          <div className="flex items-center gap-2 mt-2 text-zinc-500 text-[12px]">
            <HiOutlineCalendar className="text-lg" />
            <p>{project.duration}</p>
          </div>

          {/* Description */}
          <p className="mt-2 text-gray-300">{project.description}</p>

          {/* Tags */}
          <ProjectTags tags={project.tags} /> {/* Pass tags to ProjectTags */}
        </div>
      ))}
    </div>
  );
};

export default Projects;
