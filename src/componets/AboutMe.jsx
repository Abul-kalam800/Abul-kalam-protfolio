import React from "react";
import kalam from '../assets/kalam111.png'

const AboutMe = () => {
  return (
    <section className="bg-base-200 py-12 px-1 lg:px-20 flex flex-col md:flex-row justify-center items-centern  gap-7" id="about">
      <div className="md:w-5/12 w-full mb-10 mx-auto ">
        <img src={kalam} alt="aboutmeimg" className=" w-74 h-74 object-cover rounded-full border-2 border-primary"/>
      </div>
      <div className="md:w-7/12 w-full px-3 md:px-0 ">
        <h2 className="text-4xl font-bold text-secondary mb-6">
          About Me
        </h2>
        <p className="text-lg  mb-8">
          Hi, I'm <span className="font-bold text-primary">Mohammad Abul Kalam</span>, 
          a passionate and detail-oriented <span className="text-blue-600 font-semibold">Frontend Developer </span> 
          with a love for building clean, responsive, and user-friendly web applications.  
          I specialize in modern web technologies like 
          <span className="text-blue-500"> React.js</span>, 
          <span className="text-yellow-500"> JavaScript</span>, and 
          <span className="text-teal-500"> Tailwind CSS</span>.
        </p>
        <p className="text-lg ">
          My goal is to transform ideas into beautiful, functional websites 
          while continuously learning and keeping up with the latest trends in 
          web development. Let's create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
