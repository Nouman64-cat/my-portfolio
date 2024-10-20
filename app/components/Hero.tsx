// components/Skills.tsx
import React, { forwardRef } from 'react';

const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center" data-scroll-section>
      <h2 className="text-7xl md:text-5xl font-bold">Nouman Ejaz</h2>
    </section>
  );
});

export default Hero;
