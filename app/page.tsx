import Link from "next/link";
import React from "react";
import { FaMagic } from "react-icons/fa"; // Magic wand icon
import Particles from "./components/general/StarBackground";
import BlobBackground from "./components/blob/BlobBackground";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      {/* <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav> */}
      {/* <BlobBackground /> */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl font-bold text-gray-800 duration-1000  cursor-default  animate-title font-display sm:text-6xl md:text-9xl  ">
        Nouman Ejaz
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
        <h2 className="text-sm text-zinc-500 text-center">
          I build experience with user interfaces and intriguing designs
        </h2>
        {/* Button Section */}
        <Link href="/portfolio">
          <button className="flex items-center px-6 py-3 text-sm font-normal text-white bg-purplish rounded-full shadow-lg border-2 border-transparent duration-500 hover:border-zinc-300 hover:ring-2 hover:ring-zinc-300 focus:outline-none">
            <FaMagic className="mr-2 text-lg" />
            Let’s Start
          </button>
        </Link>
      </div>
    </div>
  );
}
