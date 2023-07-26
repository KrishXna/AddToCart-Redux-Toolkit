import React from "react";
import NatureImg from "../assets/Nature.jpg";
const HeroSection = ({ className, children }) => {
  return (
    <>
      <div
        className={`w-full h-[100vh] md:h-screen inset-0 bg-cover object-contain ${className}`}
        style={{ backgroundImage: `url(${NatureImg})` }}
      >
        {children}
      </div>
    </>
  );
};

export default HeroSection;
