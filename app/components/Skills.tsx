// components/Skills.tsx
import React, { forwardRef } from 'react';

const Skills = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="skills" className="min-h-screen bg-gray-700 flex items-center justify-center" data-scroll-section>
      <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
    </section>
  );
});

export default Skills;
