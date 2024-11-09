import React from "react";
import ExperienceTags from "./ExperienceTags"; // Import the ExperienceTags component
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { TfiLocationPin } from "react-icons/tfi";
const experiences = [
  {
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    duration: "2024 — Present",
    location: "Johar Town, Lahore",
    description:
      "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    tags: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    title: "Lead Engineer",
    company: "Upstatement",
    duration: "2018 — 2024",
    location: "Johar Town, Lahore",
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    tags: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Contentful",
      "Node.js",
      "PHP",
    ],
  },
];

const Experience = () => {
  return (
    <div className=" text-white max-w-3xl mx-auto">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="mb-8 hover:border-2 hover:border-purplish hover:border-opacity-10 rounded-2xl p-4 hover:bg-light_greenish hover:bg-opacity-10 transition duration-500 ease-in-out"
        >
          <h3 className="text-2xl font-medium text-bluish">
            {experience.title}
          </h3>
          <div className="flex items-center gap-2">
            <HiOutlineBuildingOffice className="text-xl" />
            <h1 className="text-purplish mt-1">{experience.company}</h1>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex gap-1 items-center">
              <TfiLocationPin className="text-zinc-500"/>
              <p className="text-zinc-500 text-[12px] mt-1">{experience.location}</p>
            </div>
            <p className="text-zinc-500 text-[12px]">{experience.duration}</p>
          </div>
          {/* Description */}
          <p className="mt-2 text-gray-300">{experience.description}</p>
          {/* Tags */}
          <ExperienceTags tags={experience.tags} />{" "}
          {/* Pass tags to ExperienceTags */}
        </div>
      ))}
    </div>
  );
};

export default Experience;
