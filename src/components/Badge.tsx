import React from "react";

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="bg-[#1e1e2e] py-1 px-1.5 rounded ml-1 inline-block leading-[100%]">
      {text}
    </span>
  );
}
