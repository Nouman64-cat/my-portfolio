import React from "react";
import Resume from "../download-resume/Resume";

const Introduction = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id="introduction"
      ref={ref}
      className="bg-dark_bg text-dark_greyish max-w-3xl mx-auto"
    >
      <p className="mb-4">
        I'm <span className="text-dark_greyish bg-purplish rounded-xl px-2 py-1">Nouman Ejaz</span>, skilled Frontend
        Engineer and UI/UX Designer. I specialize in crafting responsive,
        engaging, and visually appealing user interfaces that deliver
        exceptional user experiences. With expertise in Next.js, React, Tailwind
        CSS, and Redux, I build dynamic{" "}
        <span className="text-dark_greyish bg-purplish rounded-xl px-2 py-1">front-end applications</span> that are
        both scalable and performance-driven. I’ve honed my expertise across
        various projects and roles, including as a{" "}
        <span className="text-dark_greyish bg-purplish rounded-xl px-2 py-1">
          Co-Founder at CareerTweakrz
        </span>
      </p>
      <p className="mb-4">
        As a <span className="text-dark_greyish bg-purplish rounded-xl px-2 py-1">UI/UX Designer</span>, I focus on creating intuitive designs that
        prioritize user needs and aesthetics. My work extends to developing
        impactful design tools, such as <span className="text-dark_greyish bg-purplish rounded-xl px-2 py-1">Figma</span> plugins like GlassAura and
        Claymorphism, which enhance the creative process for designers
        worldwide.
      </p>
      <Resume />
    </div>
  );
});

export default Introduction;
