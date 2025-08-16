import React from "react";
import hero from '../assets/kalam-hero-section.png';
import cv from '../assets/Resume-kalam.pdf'

const Hero = () => {
  return (
    <section className="bg-base-50 min-h-screen flex items-center" id="home">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Hi, I'm <span className="text-secondary">Mohammad Abul Kalam</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl  max-w-lg">
            I'm a passionate{" "}
            <span className="font-semibold text-primary">Frontend Developer </span>
           I loves building beautiful and functional websites with modern
            technologies like React, Tailwind CSS, and more.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={cv}
              download="Resume-kalam.pdf"
              className="btn btn-primary"
            >
              Download CV
            </a>
            
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={hero}
            alt="Profile"
            className="w-84 h-84 object-cover rounded-full shadow-lg border-4 border-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
