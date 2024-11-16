import React from "react";
import ProjectTable from "../components/general/ProjectTable";
import Link from "next/link";
import { FaArrowCircleLeft, FaArrowLeft } from "react-icons/fa";

const page = () => {
  return (
    <div className="min-h-screen p-20">
      <div className="mb-10">
        <div className="mb-4 hover:text-purplish group">
          <Link href="/" className="flex items-center gap-3">
            {/* Icon with hover animation */}
            <FaArrowLeft className="mb-1 transition-transform duration-300 group-hover:-translate-x-2" />
            <p className="font-thin">Back to Home</p>
          </Link>
        </div>
        <div>
          <h1 className="text-4xl font-medium text-purplish mb-1">
            All Projects
          </h1>
          <p className="text-[12px] font-thin text-zinc-400">
            here are the projects that I have completed so far. It represents my
            journey of becoming a frontend engineer.
          </p>
        </div>
      </div>
      <ProjectTable />
    </div>
  );
};

export default page;
