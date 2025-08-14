import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Banana Garden",
      description:
        "Banana garden it is a garden website any one can sheare his tips for garden . Built with React.js and Tailwind CSS.",
      image: "https://i.postimg.cc/N0fS77zS/banana-garden.png",
      link: "https://banana-garden-b6fe3.web.app/",
    },
    {
      title: "Home-repair",
      description:
        "A full-stack Home repair site, This website help people who want to sell his service it can be any type services, Using react.js Node.js and express.js",
      image: "https://i.postimg.cc/W4wptnJy/home-repair.png",
      link: "https://home-repair-service-1989e.web.app/",
    },
    {
      title: "Employee managment",
      description:
        "A web app to create, edit, and track daily tasks. Built with React.js and Node.js.",
      image: "https://i.postimg.cc/rsm5fzk8/employee-managment.png",
      link: "https://employee-managment-493b0.web.app/",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-20" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
