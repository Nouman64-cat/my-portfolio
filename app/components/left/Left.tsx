import React from "react";
import Header from "./Header";
import IntersectionNavigation from "../general/IntersectionNavigation";
import Navigation from "../general/Navigation";
import StarBackground from "../general/StarBackground";
import Particles from "../general/StarBackground";

const Left = () => {
  return (
    <div className="space-y-10">
            <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={50}
      />
        <Header />
        <Navigation />
    </div>
  );
};

export default Left;
