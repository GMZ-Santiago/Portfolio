import React, { useState } from "react";
import Detail from "../Detail/Detail";
import style from "./Portfolio.module.css";

const projectsData = [
  {
    id: 1,
    title: "Final Project",
    subtitle: "Vinyls-Trade",
    description: "E-Commerce / Marketplace",
    images: ["imagenpf.png", "pf2.png", "pf3.png", "pf4.png", "pf5.png"],
  },
  {
    id: 2,
    title: "Individual Project",
    subtitle: "Food",
    description: "Food Recipe Page",
    images: ["imagenpi.png", "pi2.png", "pi3.png", "pi4.png"],
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleExpand = (projectId) => {
    if (selectedProject === projectId) {
      setSelectedProject(null);
    } else {
      setSelectedProject(projectId);
    }
  };

  return (
    <div className={style["portfolio-container"]}>
      <hr />
      <h1>Proyectos</h1>
      <p className={style.p}>Descubre alguno de mis trabajos recientes</p>
      <p className={style.p2}>
      He estado trabajando día a día para mejorar mis prácticas de programación
      </p>
      <p className={style.p3}>
      para de esta manera, lograr la excelencia para impulsar mi carrera tecnológica. 🚀
      </p>

      <div className={style["projects-list"]}>
        {projectsData.map((project) => (
          <div className={style["project"]} key={project.id}>
            <div
              className={`${style["project-card"]} ${
                selectedProject === project.id ? style["expanded"] : ""
              }`}
              onClick={() => toggleExpand(project.id)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className={style["project-image"]} 
              />
              <h2 className={style["project-title"]}>{project.title}</h2> 
              <p className={style["project-subtitle"]}>{project.subtitle}</p> 
              <pre className={style["project-description"]}>{project.description}</pre> 
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Detail
          project={projectsData.find((project) => project.id === selectedProject)}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
