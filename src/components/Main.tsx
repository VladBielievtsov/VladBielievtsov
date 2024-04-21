import React from "react";
import { motion } from "framer-motion";
import helloImg from "../assets/hello.webp";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbFileDownload } from "react-icons/tb";

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

export default function Main() {
  return (
    <main className="px-4 pt-4 pb-12">
      <div className="text-[#CDD6F4] relative max-w-[650px] w-full mx-auto bg-[#1E1E2E] rounded-md border-[#f2cccd]">
        <section>
          <div className="relative mb-8">
            <h1 className="text-3xl font-bold helloImage inline">
              Vlad Bielievtsov <span className="emoji-wave">👋</span>
            </h1>
            <img
              src={helloImg}
              alt="Hello there"
              className="w-[300px] absolute left-[50%] transform -translate-x-[50%] hidden"
            />
          </div>
          <p className="text-base tracking-wide mb-5">
            Hi, I am Vlad Bielievtsov, a Front-end Developer
          </p>
          <motion.button
            className=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-[#ddb5f2] text-[#1E1E2E] py-2 px-4 rounded-md inline-flex items-center"
              download
            >
              Resume <TbFileDownload className="ml-2 text-lg" />
            </a>
          </motion.button>
        </section>
        <hr className="w-[50px] my-8 mx-auto border-[#ddb5f2]" />
        <section>
          <h2 className="text-lg mb-5">👨‍💻 Skills</h2>
          <p className="text-base skills">
            Programming:
            {PROGRAMMING.map((skill) => (
              <span
                key={skill}
                className="bg-[#35354f] py-1 px-1.5 rounded ml-1 inline-block leading-[100%]"
              >
                {skill}
              </span>
            ))}
            <br />
            Front-end:
            {Front.map((skill) => (
              <span
                key={skill}
                className="bg-[#35354f] py-1 px-1.5 rounded ml-1 inline-block leading-[100%]"
              >
                {skill}
              </span>
            ))}
            <br />
            Back-end:
            {BACKEND.map((skill) => (
              <span
                key={skill}
                className="bg-[#35354f] py-1 px-1.5 rounded ml-1 inline-block leading-[100%]"
              >
                {skill}
              </span>
            ))}
            <br />
            Databases:
            {DATABASES.map((skill) => (
              <span
                key={skill}
                className="bg-[#35354f] py-1 px-1.5 rounded ml-1 inline-block leading-[100%]"
              >
                {skill}
              </span>
            ))}
            <br />
            Prototyping:
            {PROTOTYPING.map((skill) => (
              <span
                key={skill}
                className="bg-[#35354f] py-1 px-1.5 rounded ml-1 inline-block leading-[100%]"
              >
                {skill}
              </span>
            ))}
            <br />
            Testing:
            {TESTING.map((skill) => (
              <span
                key={skill}
                className="bg-[#35354f] py-1 px-1.5 rounded ml-1 inline-block leading-[100%]"
              >
                {skill}
              </span>
            ))}
          </p>
        </section>
        <hr className="w-[50px] my-8 mx-auto border-[#ddb5f2]" />
        <section>
          <h2 className="text-lg mb-5">📜 Experience</h2>
          <div className="flex flex-col max-w-xs gap-4">
            {EXPERIENCE.map((el) => (
              <div
                className="p-3 rounded border border-[#35354e]"
                key={el.title}
              >
                <h3 className="text-lg">{el.title}</h3>
                <span className="text-sm">{el.time}</span>
              </div>
            ))}
          </div>
        </section>
        <hr className="w-[50px] my-8 mx-auto border-[#ddb5f2]" />
        <section>
          <h2 className="text-lg mb-5">Find me on</h2>
          <div className="mb-5">
            <a
              href="https://github.com/VladBielievtsov"
              target="_blank"
              className="inline-flex items-center space-x-1 border-b border-[#e5e7eb50] hover:border-[#e5e7eb] transition mr-1"
            >
              <AiFillGithub className="text-xl" />
              <span>GitHub</span>
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/vlad-bielievtsov"
              target="_blank"
              className="inline-flex items-center space-x-1 border-b border-[#e5e7eb50] hover:border-[#e5e7eb] transition"
            >
              <IoLogoLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
          </div>
          <p>
            Or mail me at{" "}
            <a
              href="mailto:hello@bvlad.com"
              className="text-base inline-block hover:underline"
            >
              hello@bvlad.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
