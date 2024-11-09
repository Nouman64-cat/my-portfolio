import React, { useEffect, useState } from "react";
import ProjectTags from "./ProjectTags"; // Import the ProjectTags component
import { HiOutlineCalendar } from "react-icons/hi2"; // Example icon for project duration
import { Projects as ProjectType } from "@/app/interfaces/project"; // Adjust the import path for the interface
import { fetchProjects } from '@/app/graphql';

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
          <h3 className="text-2xl font-medium text-bluish">
            {project.projectTitle}
          </h3>

          {/* Project Description */}
          <p className="mt-2 text-gray-300">{project.projectDescription}</p>

          {/* Tags */}
          <ProjectTags tags={project.projectTags.split(" ")} /> {/* Split tags by spaces */}
        </div>
      ))}
    </div>
  );
});

export default Projects;
