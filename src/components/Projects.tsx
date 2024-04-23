import React from "react";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Notes",
    github: "https://github.com/VladBielievtsov/notes",
    link: "http://bvlad.com:3000",
    technologies: ["Typescript", "React", "Go", "Fiber", "PostgreSQL"],
    description: "An app where you can store your notes",
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-lg mb-5">🙃 Pet Projects</h2>
      <div className="flex flex-col max-w-xs gap-4">
        {PROJECTS.map((p, id) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            github={p.github}
            link={p.link}
            technologies={p.technologies}
          />
        ))}
      </div>
    </section>
  );
}
