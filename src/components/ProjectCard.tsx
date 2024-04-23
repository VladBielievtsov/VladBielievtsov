import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Badge from "./Badge";

interface ProjectCardProps {
  link: string;
  title: string;
  github: string;
  technologies: string[];
  description: string;
}

export default function ProjectCard({
  link,
  title,
  github,
  technologies,
  description,
}: ProjectCardProps) {
  return (
    <div className="p-3 rounded border border-[#35354e] hover:border-[#b4befe] transition">
      <div className="flex items-start">
        <div className="flex-grow">
          <a href={link} className="text-lg hover:underline" target="_blank">
            {title}
          </a>
        </div>
        <div className="pt-1 flex space-x-3">
          <a href={github} target="_blank" className="hover:text-[#fab387]">
            <AiFillGithub className="text-xl" />
          </a>
          <a href={link} target="_blank" className="hover:text-[#fab387]">
            <FiExternalLink className="text-xl" />
          </a>
        </div>
      </div>
      <p className="text-sm">{description}</p>
      <div className="flex flex-wrap gap-y-2 gap-x-1 mt-2">
        {technologies.map((t) => (
          <Badge text={t} key={t} />
        ))}
      </div>
    </div>
  );
}
