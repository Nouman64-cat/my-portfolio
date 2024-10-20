// components/Projects.tsx
import React, { forwardRef } from 'react';

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="projects" className="min-h-screen bg-gray-800 flex items-center justify-center" data-scroll-section>
      <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
    </section>
  );
});

export default Projects;
