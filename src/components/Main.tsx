import React from "react";
import { motion } from "framer-motion";
import helloImg from "../assets/hello.webp";
import { AiFillGithub } from "react-icons/ai";

export default function Main() {
  return (
    <main className="px-4 pt-4 pb-12">
      <div className="text-[#CDD6F4] relative max-w-[768px] w-full mx-auto bg-[#1E1E2E] rounded-md border-[#f2cccd]">
        <section className="mb-20">
          <div className="relative mb-3">
            <h1 className="text-3xl font-bold helloImage inline">
              Hello There <span className="emoji-wave">👋</span>
            </h1>
            <img
              src={helloImg}
              alt="Hello there"
              className="w-[300px] absolute left-[50%] transform -translate-x-[50%] hidden"
            />
          </div>
          <p className="text-base mob:text-lg tracking-wide">
            My name is Vlad Bielievtsov, I have experience in front-end
            development. I can take a design and make it work in a browser.
            React and Vue are my favorite frameworks for building websites, and
            I don't just understand how to do it - I can show you my work in
            action.
          </p>
          <p className="text-base mob:text-lg tracking-wide mt-4">
            You can see my works on my github
          </p>
          <motion.button
            className=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              href="https://github.com/VladBielievtsov"
              target="_blank"
              className="bg-[#ddb5f2] text-[#1E1E2E] py-2 px-4 rounded-md mt-4 inline-flex items-center"
            >
              GitHub <AiFillGithub className="ml-2" />
            </a>
          </motion.button>
        </section>
        <section className="mb-20">
          <h2 className="text-2xl font-bold">👨‍💻 Skills</h2>
          <ol className="mob:columns-2 mt-3 list-decimal list-inside">
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>Tailwind</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Frame Motion</li>
            <li>GSAP</li>
            <li>Wow.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Go</li>
            <li>Fiber</li>
            <li>JWT</li>
            <li>MongoDb</li>
            <li>MySql</li>
            <li>PostgreSQL</li>
          </ol>
        </section>
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-4">📜 Experience</h2>
          <div className="max-w-xs">
            <h3 className="text-lg">Freelance & Themeforest</h3>
            <span className="text-sm">2019 - 2021</span>
          </div>
          <div className="max-w-xs mt-4">
            <h3 className="text-lg">Metamorfosi</h3>
            <span className="text-sm">Sep 2021 - Mar 2023</span>
          </div>
        </section>
        <section className="">
          <h2 className="text-2xl font-bold">✉️ Get in touch</h2>
          <a
            href="mailto:hello@bvlad.com"
            className="text-3xl mt-8 inline-block hover:underline"
          >
            hello@bvlad.com
          </a>
          <div className="flex mt-6">
            <a
              href="https://github.com/VladBielievtsov"
              target="_blank"
              className="underline mr-[30px]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vlad-bielievtsov/"
              target="_blank"
              className="underline"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
