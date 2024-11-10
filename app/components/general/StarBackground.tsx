// StarBackground.tsx
import React from 'react';

const StarBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const stars = Array.from({ length: 200 });

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0">
        {stars.map((_, index) => (
          <div
            key={index}
            className="star"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 300}vh`,
              animationDuration: `${10 + Math.random() * 40}s`, // Varying duration for each star
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default StarBackground;
