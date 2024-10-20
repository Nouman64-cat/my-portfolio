// components/HomePage.tsx
"use client"
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Navigation from './Navigation';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const HomePage: React.FC = () => {
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.5 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.5 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });

  return (
    <div data-scroll-container className="bg-gray-900 min-h-screen text-white">
      <Navigation
        homeInView={homeInView}
        projectsInView={projectsInView}
        skillsInView={skillsInView}
        contactInView={contactInView}
      />
      <section
        id="home"
        ref={homeRef}
        className="flex items-center justify-center min-h-screen"
        data-scroll-section
      >
        <h1 className="name text-white text-5xl md:text-7xl font-bold opacity-0 translate-y-10">
          Nouman Ejaz
        </h1>
      </section>

      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <ContactMe ref={contactRef} />
    </div>
  );
};

export default HomePage;
