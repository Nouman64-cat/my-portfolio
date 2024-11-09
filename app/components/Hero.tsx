// components/Skills.tsx
import React, { forwardRef } from "react";

const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center"
      data-scroll-section
    >
      <h2 className="text-7xl md:text-5xl font-bold">Nouman Ejaz</h2>
      <div></div>
      {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FF0066"
          d="M40.6,-57.7C49.7,-49.2,52.1,-33.5,59,-17.9C65.8,-2.3,77,13.2,72.9,23C68.7,32.8,49.2,36.8,34.5,47.7C19.8,58.5,9.9,76.1,-1.3,77.8C-12.5,79.5,-24.9,65.5,-34.9,53.1C-44.9,40.8,-52.4,30.1,-60.2,17C-68.1,3.8,-76.4,-11.8,-73.5,-24.9C-70.7,-38,-56.8,-48.5,-42.7,-55.4C-28.6,-62.3,-14.3,-65.5,0.7,-66.5C15.7,-67.5,31.5,-66.2,40.6,-57.7Z"
          transform="translate(100 100)"
        />
      </svg> */}
    </section>
  );
});

export default Hero;
