import React from "react";

interface ExperienceCardProps {
  title: string;
  time: string;
}

export default function ExperienceCard({ title, time }: ExperienceCardProps) {
  return (
    <div className="p-3 rounded border border-[#35354e]">
      <h3 className="text-lg">{title}</h3>
      <span className="text-sm">{time}</span>
    </div>
  );
}
