import React from "react";
import ExperienceCard from "./ExperienceCard";

const EXPERIENCE = [
  {
    title: "Freelance & Themeforest",
    time: "2019 - 2021",
  },
  {
    title: "Metamorfosi",
    time: "Sep 2021 - Mar 2023",
  },
];

export default function Experience() {
  return (
    <section>
      <h2 className="text-lg mb-5">📜 Experience</h2>
      <div className="flex flex-col max-w-xs gap-4">
        {EXPERIENCE.map((el) => (
          <ExperienceCard key={el.title} title={el.title} time={el.time} />
        ))}
      </div>
    </section>
  );
}
