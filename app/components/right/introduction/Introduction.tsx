import React from "react";
import Resume from "../download-resume/Resume";

const Introduction = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id="introduction"
      ref={ref}
      className="bg-dark_bg text-white max-w-3xl mx-auto"
    >
      <p className="mb-4">Hi!{" "}
      <span className="font-medium text-purplish">Nouman Ejaz</span> skilled Software Developer, I specialize in building
        high-quality software applications that drive efficiency and
        scalability. With a strong foundation in software engineering, web
        development, and machine learning, I’ve honed my expertise across
        various projects and roles, including as a{" "}
        <span className="font-medium text-purplish">Co-Founder at CareerTweakrz</span>
      </p>
      <p className="mb-4">
        My technical journey is anchored in the MERN stack, where I bring
        dynamic and robust full-stack applications to life. On the front-end, I
        excel in crafting responsive and engaging user interfaces using{" "}
        <span className="font-medium text-purplish">Next.js, React, Tailwind CSS</span>, and{" "}
        <span className="font-medium text-purplish">Redux</span>. My experience extends into
        machine learning, utilizing Python libraries like{" "}
        <span className="font-medium text-purplish">TensorFlow</span> and{" "}
        <span className="font-medium text-purplish">Keras</span> to develop intelligent,
        data-driven solutions.
      </p>
      <p className="mb-4">
        I am also a plugin developer, having created impactful Figma plugins
        like <span className="font-medium text-purplish">GlassAura</span> and{" "}
        <span className="font-medium text-purplish">Claymorphism</span>, which enhance
        design capabilities for fellow creatives. My ability to communicate
        effectively and collaborate across teams has consistently enabled me to
        deliver projects on time and within scope.
      </p>
      <p>
        Beyond my technical work, I hold a BS in Software Engineering from the
        University of Management and Technology, and I am constantly eager to
        connect with like-minded professionals to explore innovative solutions
        in the tech space. Let's connect and discuss how I can contribute to
        your next project or product idea!
      </p>
      <Resume />
    </div>
  );
});

export default Introduction;
