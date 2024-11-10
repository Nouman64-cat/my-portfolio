import React from "react";
import Header from "./Header";
import IntersectionNavigation from "../general/IntersectionNavigation";
import Navigation from "../general/Navigation";
import StarBackground from "../general/StarBackground";

const Left = () => {
  return (
    <div className="space-y-10">
        <Header />
        <Navigation />
    </div>
  );
};

export default Left;
