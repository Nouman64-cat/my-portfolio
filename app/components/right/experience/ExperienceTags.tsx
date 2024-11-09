import React from 'react';

interface ExperienceTagsProps {
  tags: string[];
}

const ExperienceTags: React.FC<ExperienceTagsProps> = ({ tags }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 text-white text-[12px] font-medium bg-purplish rounded-full"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default ExperienceTags;
