"use client"
import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Navigation from './Navigation';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Hero from './Hero';

const HomePage: React.FC = () => {
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.5 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.5 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initializeScroll = async () => {
      if (typeof window !== 'undefined' && scrollContainerRef.current) {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        const scroll = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          lerp: 0.075,
        });

        const handleResize = () => {
          if (scroll) {
            scroll.update();
          }
        };
        window.addEventListener('resize', handleResize);

        return () => {
          if (scroll) {
            scroll.destroy();
          }
          window.removeEventListener('resize', handleResize);
        };
      }
    };

    initializeScroll();
  }, []);

  return (
    <div ref={scrollContainerRef} data-scroll-container className=" min-h-screen">
      <Navigation
        homeInView={homeInView}
        projectsInView={projectsInView}
        skillsInView={skillsInView}
        contactInView={contactInView}
      />
      <Hero ref={homeRef} />

      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <ContactMe ref={contactRef} />
    </div>
  );
};

export default HomePage;
