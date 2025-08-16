import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpressvpn, SiFigma, SiMongodb, SiPostman, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


const Skills = () => {
  const myskills = [
    { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-300 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "Express.js", icon: <SiExpressvpn className="text-gray-700 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400 text-4xl" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500 text-4xl" /> },
    { name: "VS Code", icon: <VscVscode  className="text-blue-500 text-4xl" /> },
    
  ];

  return (
    <section className=" py-12 px-6 lg:px-20" id="skills">
      <div className="max-w-6xl mx-auto bg-base-200">
        <h2 className="text-4xl font-bold  mb-10 text-center">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {myskills.map((skill, index) => (
            <div
              key={index}
              className=" p-6 rounded-xl shadow hover:shadow-lg flex flex-col items-center transition-shadow duration-300"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold ">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
