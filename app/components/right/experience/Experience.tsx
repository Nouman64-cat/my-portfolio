import React, { useEffect, useState } from "react";
import ExperienceTags from "./ExperienceTags"; // Import the ExperienceTags component
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { TfiLocationPin } from "react-icons/tfi";
import { fetchExperiences } from "@/app/graphql"; // Adjust path accordingly
import { Experience as ExperienceType } from "@/app/interfaces/experience"; // Adjust path accordingly

const Experience = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);

  useEffect(() => {
    const loadExperiences = async () => {
      const fetchedExperiences = await fetchExperiences();
      setExperiences(fetchedExperiences);
    };
    loadExperiences();
  }, []);
  return (
    <div id="experience" ref={ref} className="text-white max-w-3xl mx-auto">
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="mb-8 hover:border-2 hover:border-purplish hover:border-opacity-10 rounded-2xl p-4 hover:bg-light_greenish hover:bg-opacity-10 transition duration-500 ease-in-out"
        >
          {/* Designation and Company */}
          <h3 className="text-2xl font-medium text-bluish">
            {experience.experienceDesignation}
          </h3>
          <div className="flex items-center gap-2">
            <HiOutlineBuildingOffice className="text-xl text-gray-700" />
            <h1 className="text-purplish mt-1">{experience.experienceCompany}</h1>
          </div>

          {/* Location and Duration */}
          <div className="flex justify-between mt-2">
            <div className="flex gap-1 items-center">
              <TfiLocationPin className="text-zinc-700"/>
              <p className="text-zinc-500 text-[12px] mt-1">
                {experience.experienceLocation}
              </p>
            </div>
            <p className="text-zinc-500 text-[12px]">
              {experience.experienceStartDate} — {experience.experienceEndDate || "Present"}
            </p>
          </div>

          {/* Description */}
          <p className="mt-2 text-gray-600">{experience.experienceDescription}</p>

          {/* Tags */}
          <ExperienceTags tags={experience.experienceDesignation.split(" ")} /> {/* Split tags by space */}
        </div>
      ))}
    </div>
  );
});
//test
export default Experience;
