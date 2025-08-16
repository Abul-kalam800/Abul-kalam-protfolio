import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Banana Garden",
      description:
        "Banana garden it is a garden website any one can sheare his tips for garden . Built with React.js and Tailwind CSS.",
      image: "https://i.postimg.cc/N0fS77zS/banana-garden.png",
      link: "https://banana-garden-b6fe3.web.app/",
      github:"https://github.com/Abul-kalam800/Banana-client-site",
      tech: [
        "React.js",
        "Node.js",
        "Express Js",
        "MongoDB",
        "fireBase",
        "Tailwind css",
      ],
    },
    {
      title: "Home-repair",
      description:
        "A full-stack Home repair site, This website help people who want to sell his service  any type, Using react.js Node.js and express.js",
      image: "https://i.postimg.cc/W4wptnJy/home-repair.png",
      link: "https://home-repair-service-1989e.web.app/",
      github:"https://github.com/Abul-kalam800/home-repair-service",
      tech: ["React.js", "Node.js", "Express Js", "MongoDB", "fireBase"],
    },
    {
      title: "Employee managment",
      description:
        "A web app to create, edit, and track daily tasks. Built with React.js and Node.js.",
      image: "https://i.postimg.cc/rsm5fzk8/employee-managment.png",
      link: "https://employee-managment-493b0.web.app/",
      github:"https://github.com/Abul-kalam800/Employee-Managment_client",
      tech: ["React.js", "Node.js", "Express Js", "MongoDB", "fireBase"],
    },
  ];

  return (
    <section className=" py-12 px-6 lg:px-20" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold  mb-10 text-center">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              className=" rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold ">{project.title}</h3>
                <p className=" mt-2">{project.description}</p>
                <p className="font-bold my-4">Technogy : </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  
                  {project.tech.map((t, i) => (
                    <button
                      key={i}
                      className="bg-secondary px-2 py-1 rounded-lg text-sm"
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="flex gap-5 items-center justify-between mt-10">
                  <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-secondary transition-colors"
                >
                  View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View github
                </a>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
