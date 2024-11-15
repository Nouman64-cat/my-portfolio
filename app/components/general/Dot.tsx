"use client";

import React, { useEffect, useRef, useState } from 'react';

interface DotProps {
  children: React.ReactNode;
}

const Dot: React.FC<DotProps> = ({ children }) => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const offset = 10; // Desired gap between cursor and dot
  const transitionSpeed = 0.1; // Adjusts the dot’s responsiveness
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cursorPosition.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const animate = () => {
    setDotPosition((prevPosition) => {
      const xDistance = cursorPosition.current.x - prevPosition.x - offset;
      const yDistance = cursorPosition.current.y - prevPosition.y - offset;

      return {
        x: prevPosition.x + xDistance * transitionSpeed,
        y: prevPosition.y + yDistance * transitionSpeed,
      };
    });
    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId.current as number);
  }, []);

  return (
    <div className="relative">
      {/* Dot */}
      <div
        style={{
          left: dotPosition.x,
          top: dotPosition.y,
          transform: 'translate(-50%, -50%)',
          position: 'fixed',
        }}
        className="w-3 h-3 border-2 border-purplish rounded-full pointer-events-none"
      />
      {/* Application Content */}
      <div>{children}</div>
    </div>
  );
};

export default Dot;
