// components/HomePage.tsx
"use client"
import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const HomePage: React.FC = () => {
  const { ref: nameRef, inView: nameInView } = useInView({ triggerOnce: true });
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Initialize Locomotive Scroll for smooth scrolling
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    });

    // GSAP Animation for name reveal
    if (nameInView) {
      gsap.to('.name', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
      });
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [nameInView]);

  return (
    <div ref={scrollContainerRef} data-scroll-container className="bg-gray-900 min-h-screen text-white">
      <section
        ref={nameRef}
        className="flex items-center justify-center min-h-screen"
        data-scroll-section
      >
        <h1 className="name text-5xl md:text-7xl font-bold opacity-0 translate-y-10">
          Nouman Ejaz
        </h1>
      </section>

      <section
        className="min-h-screen bg-gray-800 flex items-center justify-center"
        data-scroll-section
      >
        <p className="text-2xl">This is a placeholder section for your portfolio content.</p>
      </section>

      <section
        className="min-h-screen bg-gray-700 flex items-center justify-center"
        data-scroll-section
      >
        <p className="text-2xl">Another section to observe while scrolling.</p>
      </section>
    </div>
  );
};

export default HomePage;
