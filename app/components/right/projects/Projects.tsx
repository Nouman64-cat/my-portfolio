import React, { useEffect, useState } from "react";
import ProjectTags from "./ProjectTags"; // Import the ProjectTags component
import { HiOutlineCalendar } from "react-icons/hi2"; // Example icon for project duration
import { Projects as ProjectType } from "@/app/interfaces/project"; // Adjust the import path for the interface
import { fetchProjects } from "@/app/graphql";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    // Fetch projects from GraphQL and update state
    const loadProjects = async () => {
      const fetchedProjects = await fetchProjects();
      setProjects(fetchedProjects);
    };
    loadProjects();
  }, []);

  return (
    <div id="projects" ref={ref} className="text-white max-w-3xl mx-auto">
      {projects.map((project) => (
        <div
          key={project.id}
          className="mb-8 hover:border-2 hover:border-purplish hover:border-opacity-10 rounded-2xl p-4 hover:bg-light_greenish hover:bg-opacity-10 transition duration-500 ease-in-out"
        >
          {/* Project Title */}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 group"
          >
            <h3 className="text-2xl font-medium text-purplish">
              {project.projectTitle}
            </h3>
            <IoIosLink className="mb-1 text-xl text-purplish transition-transform duration-300 group-hover:scale-110 group-hover:text-light_greenish" />
          </a>
          <h3 className="text-[12px] font-normal mb-3 text-zinc-500">
            {project.projectShortTitle}
          </h3>
          {/* Project Description */}
          <p className="mt-2 text-gray-600">{project.projectDescription}</p>
          {/* Tags */}
          <ProjectTags tags={project.projectTags.split(" ")} />{" "}
          {/* Split tags by spaces */}
        </div>
      ))}
      {/* <div className="mb-4 text-purplish group">
        <Link
          href="/projects-archive"
          className="flex items-center gap-3 hover:underline"
        >
          <p className="font-normal">View All Projects</p>
          <FaArrowRight className="mb-1 transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div> */}
    </div>
  );
});

export default Projects;
