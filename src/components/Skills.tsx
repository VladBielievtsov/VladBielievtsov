import React from "react";
import Badge from "./Badge";

const PROGRAMMING = ["JavaScript", "TypeScript", "Go"];

const DATABASES = ["MongoDb", "MySql", "PostgreSql"];

const Front = [
  "Html",
  "Css",
  "Scss",
  "Tailwind",
  "React",
  "Redux",
  "GSAP",
  "Wow.js",
];

const BACKEND = ["Node.js", "Express", "Fiber"];

const PROTOTYPING = ["Figma", "Adobe XD"];

const TESTING = ["Jest"];

export default function Skills() {
  return (
    <section>
      <h2 className="text-lg mb-5">👨‍💻 Skills</h2>
      <p className="text-base skills">
        Programming:
        {PROGRAMMING.map((skill) => (
          <Badge key={skill} text={skill} />
        ))}
        <br />
        Front-end:
        {Front.map((skill) => (
          <Badge key={skill} text={skill} />
        ))}
        <br />
        Back-end:
        {BACKEND.map((skill) => (
          <Badge key={skill} text={skill} />
        ))}
        <br />
        Databases:
        {DATABASES.map((skill) => (
          <Badge key={skill} text={skill} />
        ))}
        <br />
        Prototyping:
        {PROTOTYPING.map((skill) => (
          <Badge key={skill} text={skill} />
        ))}
        <br />
        Testing:
        {TESTING.map((skill) => (
          <Badge key={skill} text={skill} />
        ))}
      </p>
    </section>
  );
}
