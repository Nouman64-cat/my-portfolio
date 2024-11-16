"use client";

import React from "react";
import { BiLink } from "react-icons/bi";

interface Resource {
  id: number;
  title: string;
  description: string;
  type: "Handbook" | "Short Book" | "Article" | "Tutorial" | "Case Study";
  link: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Learn React Handbook",
    description:
      "A comprehensive guide to mastering React, covering essential concepts, best practices, and advanced techniques. Learn how to build interactive UIs efficiently and manage state effectively using modern React tools.",
    type: "Handbook",
    link: "/resources/react-handbook.pdf",
  },
  {
    id: 2,
    title: "CSS Tips & Tricks",
    description:
      "A short book packed with advanced CSS techniques to take your styling to the next level. Understand concepts like grid, flexbox, animations, and custom properties to create visually stunning web pages.",
    type: "Short Book",
    link: "/resources/css-tips.pdf",
  },
  {
    id: 3,
    title: "JavaScript Fundamentals",
    description:
      "A beginner-friendly article that introduces JavaScript basics for aspiring developers. It includes examples, hands-on exercises, and best practices to ensure a strong foundation for web development.",
    type: "Article",
    link: "/resources/js-fundamentals.pdf",
  },
  {
    id: 4,
    title: "Building Responsive Layouts",
    description:
      "An in-depth tutorial that teaches you how to create mobile-first, responsive web designs. Learn how to adapt layouts for various devices and implement best practices in responsive design.",
    type: "Tutorial",
    link: "/resources/responsive-layouts.pdf",
  },
  {
    id: 5,
    title: "Web Performance Optimization",
    description:
      "A detailed case study on improving website performance and reducing load times. It explores real-world techniques like lazy loading, code splitting, and caching to optimize user experience.",
    type: "Case Study",
    link: "/resources/performance-optimization.pdf",
  },
];

const FreeResourcesGrid: React.FC = () => {
  return (
    <section className="py-10 px-5 md:px-20 font-axiforma">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-purplish mb-8">
        Free Resources
      </h2>
      {/* Grid layout with big vertical card on the left and a 2x2 grid on the right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Big Vertical Card */}
        <a
          href={resources[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-transparent rounded-2xl shadow-md p-5 hover:shadow-[0_10px_20px_rgba(128,90,213,0.7)] hover:border-2 hover:border-purplish transition-all duration-300 ease-in-out border-2 border-purple-400 lg:col-span-1 lg:row-span-2 lg:h-[30rem]"
        >
          <div className="flex items-center gap-4 mb-2 hover:text-purplish">
            <div>
              <h3 className="text-lg md:text-xl font-medium text-gray-300">
                {resources[0].title}
              </h3>
            </div>
            <div>
              <BiLink className="text-xl mb-2" />
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-3">
            {resources[0].description}
          </p>
          <span className="inline-block px-3 py-2 text-xs font-medium text-white bg-purplish rounded-full">
            {resources[0].type}
          </span>
        </a>

        {/* 2x2 Grid on the Right */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 lg:col-span-2 ">
          {resources.slice(1).map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-transparent rounded-2xl shadow-md p-5 hover:shadow-[0_10px_20px_rgba(128,90,213,0.7)] hover:border-2 hover:border-purplish transition-all duration-300 ease-in-out border-2 border-purple-400 sm:h-auto md:h-[14.2rem]"
            >
              <div className="flex items-center gap-4 mb-2 hover:text-purplish">
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-300">
                    {resource.title}
                  </h3>
                </div>
                <div>
                  <BiLink className="text-xl mb-2" />
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                {resource.description}
              </p>
              <span className="inline-block px-3 py-2 text-xs font-medium text-white bg-purplish rounded-full">
                {resource.type}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeResourcesGrid;
